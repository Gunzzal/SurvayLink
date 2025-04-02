package com.example.demo.auth.service;

import java.io.IOException;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.auth.domain.AuthRequestDTO;
import com.example.demo.auth.entity.Auth;
import com.example.demo.auth.repository.AuthRepository;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;

@Service
@RequiredArgsConstructor
public class AuthService {
    
    private DefaultMessageService messageService;
    private final Dotenv dotenv = Dotenv.load();

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final SecureRandom RANDOM = new SecureRandom();

    private final AuthRepository authRepository;


    @PostConstruct 
    private void initMessageService() {
        this.messageService = NurigoApp.INSTANCE.initialize(
            dotenv.get("SMS_API_KEY"), 
            dotenv.get("SMS_API_SECRET"), 
            dotenv.get("SMS_API_URL")
        );
    }

    public Integer request(AuthRequestDTO params){
        String phone = params.getPhone();
        String authCode = generateVerificationCode();
        saveVerificationCode(phone, authCode);
        try {
            SingleMessageSentResponse result = sendMmsByResourcePath(authCode, phone);
            return Integer.parseInt(result.getStatusCode());
        }catch(Exception error){
            return -1;
        }
    }

    // public AuthService() {
    //     this.dotenv = Dotenv.load();
    //     this.messageService = NurigoApp.INSTANCE.initialize(dotenv.get("SMS_API_KEY"), 
    //                                                         dotenv.get("SMS_API_SECRET"), 
    //                                                         dotenv.get("SMS_API_URL"));
    // }

    public SingleMessageSentResponse sendMmsByResourcePath(String authCode, String phone) throws IOException {
        
        Message message = new Message();
        // 발신번호 및 수신번호는 반드시 01012345678 형태로 입력되어야 합니다.
        message.setFrom(dotenv.get("SMS_API_PHONE"));
        message.setTo(phone);
        message.setText("인증코드 : "+authCode);
        // message.setImageId(imageId);

        // 여러 건 메시지 발송일 경우 send many 예제와 동일하게 구성하여 발송할 수 있습니다.
        SingleMessageSentResponse response = this.messageService.sendOne(new SingleMessageSendingRequest(message));
        // System.out.println(response);

        return response;
    }

    public String generateVerificationCode() {
        StringBuilder code = new StringBuilder(6);
        for (int i = 0; i < 6; i++) {
            code.append(CHARACTERS.charAt(RANDOM.nextInt(CHARACTERS.length())));
        }
        String verificationCode = code.toString();
        return verificationCode;
    }

     // 새 인증 코드 저장
     @Transactional
     public void saveVerificationCode(String phoneNumber, String verificationCode) {
         Auth auth = Auth.builder()
                 .phone(phoneNumber)
                 .authCode(verificationCode)
                 .createdAt(LocalDateTime.now())
                 .expiresAt(LocalDateTime.now().plusMinutes(3)) // 3분 후 만료
                 .authed(false)
                 .build();
 
                 authRepository.save(auth);
     }
    
        // 인증 코드 검증
        @Transactional
        public boolean verifyCode(String phone, String authCode) {
            Optional<Auth> smsAuth = authRepository
                    .findByPhoneAndAuthCode(phone, authCode);
    
            if (smsAuth.isPresent() && smsAuth.get().getExpiresAt().isAfter(LocalDateTime.now())) {
                // 인증 완료 처리
                Auth auth = smsAuth.get();
                auth.setAuthed(true);
                authRepository.save(auth);
                return true;
            }
            return false;
        }
    
        // 만료된 코드 삭제 (스케줄러에서 호출 가능)
        @Transactional
        public void deleteExpiredCodes() {
            
            authRepository.deleteByExpiresAtBefore(LocalDateTime.now());
        }
}
