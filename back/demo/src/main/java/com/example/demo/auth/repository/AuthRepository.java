package com.example.demo.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.auth.entity.Auth;

import java.util.Optional;

@Repository
public interface AuthRepository extends JpaRepository<Auth, Long> {
    // 특정 전화번호의 가장 최근 인증 코드 찾기
    Optional<Auth> findTopByPhoneOrderByCreatedAtDesc(String phone);

    // 인증 코드 확인을 위한 메서드
    Optional<Auth> findByPhoneAndAuthCode(String phone, String authCode);

    // 만료된 인증 코드 삭제
    void deleteByExpiresAtBefore(java.time.LocalDateTime now);
}
