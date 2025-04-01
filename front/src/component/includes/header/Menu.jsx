import React from 'react';
import MenuList from './MenuItems';
import styled from 'styled-components';

const Menu = () => {
  const menuItems = ['소개', '설문조사','포인트 사용', '마이페이지'];

  return (
    <MenuListWapper>
      <MenuList menuItems={menuItems} />
    </MenuListWapper>
  );
};
const MenuListWapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`;


export default Menu;