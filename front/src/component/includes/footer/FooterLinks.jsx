import React from 'react';
import styled from 'styled-components';

const FooterLinks = () => {
  const links = [
    { text: '회사소개', href: '#' },
    { text: '개인정보취급방침', href: '#', highlight: true },
    { text: '이용약관', href: '#' }
  ];

  return (
    <LinksWrapper>
      <Logo src="https://cdn.builder.io/api/v1/image/assets/c7f1d91a917e4e2ba5370da6919a77db/5d8e3c016fa60a53e426fc9c1221aed770484177?apiKey=c7f1d91a917e4e2ba5370da6919a77db&" alt="Company Logo" />
      {links.map((link, index) => (
        <LinkItem key={index} href={link.href} $highlight={link.highlight}>
          {link.text}
        </LinkItem>
      ))}
    </LinksWrapper>
  );
};

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
  color: #fff;
  white-space: nowrap;
  font: 400 15px/1 Roboto, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  aspect-ratio: 6.45;
  object-fit: contain;
  object-position: center;
  width: 193px;
  max-width: 100%;
`;

const LinkItem = styled.a`
  color: ${props => props.$highlight ? '#29A4FF' : 'inherit'};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default FooterLinks;