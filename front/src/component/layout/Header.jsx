import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../images/logo.jpg';
import Menu from '../includes/header/Menu';
import PersonalMenu from '../includes/header/PersonalMenu';
import { useMovePage } from '../../hooks/useMovePage';

const Header = () => {
  const { moveTo } = useMovePage();

  return (
    <HeaderWrapper>
        <Image src={LogoImage} alt="Logo" onClick={() => moveTo("/")}/> 
        <Menu />
        <PersonalMenu/>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
    display: flex; 
    cursor: pointer;
    border-bottom: 1px solid #ccc;
`;


const Image = styled.img`
    width: 200px;  /* 이미지 너비 조절 */
    height: auto; /* 비율에 따라 높이 자동 조절 */
    margin-right: auto;
`;


export default Header;