package com.example.demo.auth.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.demo.auth.domain.AuthRequestDTO;

import io.github.cdimascio.dotenv.Dotenv;
import lombok.RequiredArgsConstructor;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;

@Service
@RequiredArgsConstructor
public class AuthService {
    
    private final DefaultMessageService messageService;
    private String phone;

    public String request(AuthRequestDTO params){
        phone = params.getPhone();
        try {
            SingleMessageSentResponse result = sendMmsByResourcePath();
            System.out.println("발송 완료: "+result);
            return result.getStatusMessage();
        }catch(Exception error){
            System.out.println("에러발생!!!! "+error);
            return "에러 발생!!";
        }
    }

    public AuthService() {
        Dotenv dotenv = Dotenv.load();
        this.messageService = NurigoApp.INSTANCE.initialize(dotenv.get("SMS_API_KEY"), 
                                                            dotenv.get("SMS_API_SECRET"), 
                                                            dotenv.get("SMS_API_URL"));
    }

    public SingleMessageSentResponse sendMmsByResourcePath() throws IOException {
        // ClassPathResource resource = new ClassPathResource("static/sample.jpg");
        // File file = resource.getFile();
        // String imageId = this.messageService.uploadFile(file, StorageType.MMS, null);

        Message message = new Message();
        // 발신번호 및 수신번호는 반드시 01012345678 형태로 입력되어야 합니다.
        message.setFrom("01050183086");
        message.setTo(phone);
        message.setText("한글 45자, 영자 90자 이하 입력되면 자동으로 SMS타입의 메시지가 추가됩니다.");
        // message.setImageId(imageId);

        // 여러 건 메시지 발송일 경우 send many 예제와 동일하게 구성하여 발송할 수 있습니다.
        SingleMessageSentResponse response = this.messageService.sendOne(new SingleMessageSendingRequest(message));
        System.out.println(response);

        return response;
    }
}
