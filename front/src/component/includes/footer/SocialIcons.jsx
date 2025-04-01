import React from 'react';
import styled from 'styled-components';

const SocialIcons = () => {
  const socialLinks = [
    { src: "https://cdn.builder.io/api/v1/image/assets/c7f1d91a917e4e2ba5370da6919a77db/4f0054b4697b2710d4608dc68a23411a80c3e1e9?apiKey=c7f1d91a917e4e2ba5370da6919a77db&", alt: "Social Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/c7f1d91a917e4e2ba5370da6919a77db/1b1e5057e3f7f1c341ed4fd566b33fb66e52978b?apiKey=c7f1d91a917e4e2ba5370da6919a77db&", alt: "Social Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/c7f1d91a917e4e2ba5370da6919a77db/2a66575a8d68d9c862cb9be470d18964f75344c4?apiKey=c7f1d91a917e4e2ba5370da6919a77db&", alt: "Social Icon 3" }
  ];

  return (
    <IconsWrapper>
      {socialLinks.map((link, index) => (
        <SocialIcon key={index} src={link.src} alt={link.alt} />
      ))}
    </IconsWrapper>
  );
};

const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  cursor: pointer;
`;

export default SocialIcons;