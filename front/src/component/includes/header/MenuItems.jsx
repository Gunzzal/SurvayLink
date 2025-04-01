import React from 'react';
import styled from 'styled-components';

const MenuItems = ({menuItems}) => {
  return (
    <MenuWrapper>
      {menuItems.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </MenuWrapper>
  );
};

const MenuWrapper = styled.section`
  display: flex;                  /* Flexbox 사용 */
  align-items: center;           /* 수직 중앙 정렬 */
  justify-content: center;       /* 수평 중앙 정렬 */
  height: 80px;
  color: #333;
  font: 700 17px Roboto, sans-serif;
`;

const MenuItem = styled.div`
  padding-top: 10px;
  margin-left: 50px; /* 항목 간 간격 조절 */
  margin-right: 50px; /* 항목 간 간격 조절 */
  cursor: pointer;
   &:hover {
    color: darkblue;
    font-weight: bold; /* 글씨 두께를 키웁니다 */
`;


export default MenuItems;