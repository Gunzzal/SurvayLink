import React from 'react';
import styled from 'styled-components';
import SocialIcons from '../includes/footer/SocialIcons';
import FooterLinks from '../includes/footer/FooterLinks';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLinks />
        <SocialIcons />
      </FooterContent>
      <CompanyInfo>
        서울특별시 서초구 반포대로 9 7층 (서초구 서초동 1463-10)
        <br />
        사업자등록번호: 113-81-92090 통신판매업신고: 강남 제02060호
      </CompanyInfo>
      <Copyright>
        © 2024 META G DATA lnc. ALL RIGHTS RESERVED
      </Copyright>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 49px 20px;
`;

const FooterContent = styled.div`
  align-self: stretch;
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CompanyInfo = styled.p`
  color: #999;
  margin: 21px 0 0 233px;
  font: 400 16px/26px Roboto, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

const Copyright = styled.p`
  color: #999;
  margin: 28px 0 0 233px;
  font: 400 14px/1.6 Roboto, sans-serif;
  @media (max-width: 991px) {
    margin-left: 0;
  }
`;

export default Footer;