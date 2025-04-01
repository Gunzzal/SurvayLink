import React from "react";
import styled from "styled-components";
import phoneImg from "../../../images/phoneCertification.jpeg";
import CONFIG from "../../../config";

const CertificationPage = () => {

    const OpenSMSCertification = () => {
        window.open(CONFIG.FRONTEND_BASE_URL+"VerifyCode", "_blank", "width=500,height=600");
    };

    return (
        <div>
            <TitleText>휴대폰 본인 인증</TitleText>
            <NoticeContainer>
                가입 여부 확인 및 개인정보 보호를 위해 본인 인증이 필요합니다.
            </NoticeContainer>
            <PhoneImage src={phoneImg} />
            <StyledButton onClick={OpenSMSCertification}>휴대폰 인증받기</StyledButton>
            <PanelContainer>
                <InfoItem>
                    <Bullet />
                    <ItemText>SurveyLink는 본인 확인을 위하여 휴대폰 인증을 사용합니다.</ItemText>
                </InfoItem>
                <InfoItem>
                    <Bullet />
                    <ItemText>SurveyLink는 회원님의 주민등록번호를 저장하지 않습니다.</ItemText>
                </InfoItem>
            </PanelContainer>
        </div>
    );
};

const TitleText = styled.h1`
  color: #023691;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  font: 800 33px Roboto, sans-serif;
`;

const NoticeContainer = styled.div`
  color: #444;
  text-align: center;
  margin-bottom: 40px;
  font: 400 17px/28.8px Roboto;
  @media (max-width: 991px) {
    font-size: 16px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
  }
`;

const PhoneImage = styled.img`
    display: block;
    margin: auto;
    width: 370px;
    height: auto;
`;

const StyledButton = styled.button`
    display: block;
    margin: auto;
    margin-top: 10px;
    width: 350px;
    height: 48px;
    background-color: #023691;
    color: #ffffff;
    border-radius: 10px;
    border: 1px solid #023691;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    font: 700 18px Roboto;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #012d7a;
    }
  
`;

const PanelContainer = styled.div`
  display: block;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 100px;
  width: 500px;
  background-color: #fafafa;
  border-radius: 20px;
  border: 1px solid #ddd;
  padding: 21px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Bullet = styled.div`
  width: 4px;
  height: 4px;
  background-color: #000000;
  border-radius: 2px;
`;

const ItemText = styled.p`
  color: #333;
  font: 400 15px/25.6px Roboto;
  margin: 0;
`;

export default CertificationPage;