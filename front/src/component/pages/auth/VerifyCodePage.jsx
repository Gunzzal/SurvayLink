import React, { useState } from "react";
import styled from "styled-components";
import api from "../../api/axios";

const VerifyCodePage = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const AuthRequest = async () => {
        const data = {
            name : name,
            phone : phone
        }
        try{
            const response = await api.post("/auth/request",data);
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <Container>
            <Title>휴대폰 본인 인증</Title>
            <Form>
                <Label>이름</Label>
                <Input
                    type="text"
                    placeholder="이름을 입력하세요"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Label>전화번호</Label>
                <Input
                    type="number"
                    placeholder="'-'은 없이 숫자만 입력해 주세요"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <SubmitButton onClick={AuthRequest}>인증 요청</SubmitButton>
            </Form>
        </Container>
    );
};

// 스타일 정의
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

const Input = styled.input`
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

export default VerifyCodePage;
