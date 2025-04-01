import React from 'react';
import styled from 'styled-components';
import { useMovePage } from '../../../hooks/useMovePage';

const PersonalMenu = () => {

  const { moveTo } = useMovePage();

  return (
    <MenuWrapper>
      <MenuItem onClick={() => moveTo("/login/Certification")}>회원가입</MenuItem>
      &nbsp;&nbsp;ㅣ&nbsp;&nbsp;
      <MenuItem>로그인</MenuItem>
    </MenuWrapper>
  );
};

const MenuItem = styled.div`
  cursor: pointer;
   &:hover {
    color: darkblue;
    font-weight: bold; /* 글씨 두께를 키웁니다 */
`;

const MenuWrapper = styled.section`
  padding-top: 5px;
  display: flex;                  /* Flexbox 사용 */
  align-items: center;           /* 수직 중앙 정렬 */
  justify-content: center;       /* 수평 중앙 정렬 */
  height: 80px;
  color: #333;
  font: 700 15px Roboto, sans-serif;
  margin-left: auto;
  margin-right: 30px;
`;

export default PersonalMenu;