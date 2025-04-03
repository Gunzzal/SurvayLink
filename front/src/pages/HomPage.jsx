import React from 'react';
import ImageBoard from '../component/includes/homePage/ImageBoard';
import styled from 'styled-components';
import SurveyCardButton from '../component/includes/homePage/SurveyCardButton';

const HomPage = () => {

  return (
    <MainContainer>
        <HorizonContainer>
            <ImageBoard/>
            <SurveyCardButtonContainer>
                <SurveyCardButton/>
                <SurveyCardButton/>
            </SurveyCardButtonContainer>
        </HorizonContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 1300px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

const HorizonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 440px;
`;

const SurveyCardButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export default HomPage;