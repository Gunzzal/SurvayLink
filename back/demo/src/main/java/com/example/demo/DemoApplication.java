package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
@EnableScheduling
public class DemoApplication {

	static {
        // `.env.properties` 로드
        Dotenv dotenv = Dotenv.configure()
                .ignoreIfMissing() // 파일 없으면 무시
                .load();

        // 환경 변수 설정
        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
    }

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
}
