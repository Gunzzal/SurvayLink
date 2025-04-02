package com.example.demo.auth.scheduler;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.demo.auth.service.AuthService;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ExpiredCodeCleanupTask {

    private final AuthService authService;

    // 1분마다 만료된 인증 코드 삭제 (cron: "0 * * * * ?")
    @Scheduled(fixedRate = 60000)
    public void cleanupExpiredCodes() {
        authService.deleteExpiredCodes();
    }
}
