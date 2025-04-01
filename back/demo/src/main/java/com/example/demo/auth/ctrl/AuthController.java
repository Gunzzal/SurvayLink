package com.example.demo.auth.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.auth.domain.AuthRequestDTO;
import com.example.demo.auth.service.AuthService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    @Autowired
    private final AuthService authService;

    @PostMapping("/request")
    public ResponseEntity<String> request(@RequestBody AuthRequestDTO params) {

        // System.out.println(params);
        String result = authService.request(params);
        return new ResponseEntity<>(result,HttpStatus.OK);
    }
    
    
}
