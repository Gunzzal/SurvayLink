package com.example.demo.auth.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResponseEntity<Integer> request(@RequestBody AuthRequestDTO params) {

        Integer result = authService.request(params);
        return new ResponseEntity<>(result,HttpStatus.OK);
    }

    @PostMapping("/verify")
    public ResponseEntity<Boolean> verify(@RequestBody AuthRequestDTO params) {

        Boolean result = authService.verifyCode(params.getPhone(), params.getAuthCode());
        return new ResponseEntity<>(result,HttpStatus.OK);
    }
    
    
}
