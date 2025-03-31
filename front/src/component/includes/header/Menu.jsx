import React from 'react';
import MenuList from './MenuItems';

const Menu = () => {
  const menuItems = ['소개', '설문조사','포인트 사용', '마이페이지'];

  return (
    <div>
      <MenuList menuItems={menuItems} />
    </div>
  );
};

export default Menu;