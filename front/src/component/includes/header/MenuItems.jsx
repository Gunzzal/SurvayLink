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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* 아래쪽 그림자 추가 */
    /* 커서가 올라갔을 때의 스타일 */
  &:hover {
    box-shadow: none; /* 그림자 제거 */
    border-bottom: 1px solid #ccc;
`;

const MenuItem = styled.div`
  padding-top: 10px;
  margin-right: 100px; /* 항목 간 간격 조절 */
  cursor: pointer;
   &:hover {
    color: darkblue;
    font-weight: bold; /* 글씨 두께를 키웁니다 */
`;


export default MenuItems;