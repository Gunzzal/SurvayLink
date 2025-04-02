import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AuthVerify } from "../../api/auth";
import { useLocation } from "react-router-dom";

const VerifyCodeInputPage = () => {
    const [authCode, setAuthCode] = useState("");
    const [timeLeft, setTimeLeft] = useState(180);
    const location = useLocation();
    const phone = location.state?.phone; 

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    const handleVerify = async () => {
        const result = await AuthVerify(phone, authCode);
        console.log(result);
        if(result){
            alert("인증에 성공했습니다!");
        }else{
            alert("인증에 실패했습니다. 다시 시도해 주세요.");
        }
    };

    return (
        <Container>
            <Title>인증번호 입력</Title>
            <Form>
                <Label>인증번호</Label>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="인증번호 6자리 입력"
                        value={authCode}
                        onChange={(e) => setAuthCode(e.target.value)}
                    />
                    <Timer>{formatTime(timeLeft)}</Timer>
                </InputContainer>
                <SubmitButton onClick={handleVerify}>확인</SubmitButton>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 80px auto;
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background: #fff;
    text-align: center;
`;

const Title = styled.h2`
    color: #023691;
    margin-bottom: 20px;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Label = styled.label`
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    color: #444;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    &:focus {
        border-color: #023691;
        box-shadow: 0 0 5px rgba(2, 54, 145, 0.2);
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const Timer = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #d9534f;
`;

const SubmitButton = styled.button`
    background-color: #023691;
    color: white;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #012a67;
    }
`;

export default VerifyCodeInputPage;
