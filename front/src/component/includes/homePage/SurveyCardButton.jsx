import React from "react";
import styled from "styled-components";
// import ArrowIcon from "./ArrowIcon";

const SurveyCardButton = () => {
  return (
    <CardWrapper>
      <CardHeader>
        <HeaderText>설문참여</HeaderText>
        {/* <ArrowIcon /> */}
      </CardHeader>
      <CardDescription>
        <DescriptionText>회원님의 소중한 의견을 나눠주세요.</DescriptionText>
        <DescriptionText>메일, 문자, 알림톡으로 다양한 참여 기회가 부여됩니다.</DescriptionText>
      </CardDescription>
      <PointsIncentive>설문조사를 통해 포인트를 쌓아 보세요!</PointsIncentive>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 350px;
  height: 150px;
  border-radius: 20px;
  border: 1px solid #ddd;
  padding: 27px 31px;
  position: relative;
  background-color: #fafafa;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  @media (max-width: 640px) {
    height: auto;
    min-height: 200px;
    padding: 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 22px;
  @media (max-width: 640px) {
    margin-bottom: 16px;
  }
`;

const HeaderText = styled.span`
  color: #000;
  font: 800 17px/25.2px "Roboto", sans-serif;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const CardDescription = styled.div`
  margin-bottom: 17px;
  @media (max-width: 640px) {
    margin-bottom: 14px;
  }
`;

const DescriptionText = styled.span`
  display: block;
  color: #333;
  font: 400 15px/22.4px "Roboto", sans-serif;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

const PointsIncentive = styled.div`
  color: #023691;
  font: 600 15px/22.4px "Roboto", sans-serif;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export default SurveyCardButton;