import React from 'react';
import Menu from '../includes/header/Menu';
// import styled from 'styled-components';

const Header = () => {
  const menuItems = ['소개', '서비스', '연락처', '블로그'];

  return (
    <div>
      <Menu menuItems={menuItems} />
      {/* <Hr/> */}
    </div>
  );
};

// const Hr = styled.hr`
//     border: none; /* 기본 테두리 제거 */
//     height: 1px; /* 선의 높이 설정 */
//     background-color: #ccc; /* 선의 색상 설정 */
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); /* 아래쪽 그림자 추가 */
// `;

export default Header;