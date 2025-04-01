import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import boardImage1 from '../../../images/logo.jpg';
import boardImage2 from '../../../images/image1.jpeg';
import boardImage3 from '../../../images/image2.jpeg';
import boardImage4 from '../../../images/image3.jpeg';

const images = [
    boardImage1, // 첫 번째 이미지 URL
    boardImage2, // 두 번째 이미지 URL
    boardImage3, // 세 번째 이미지 URL
    boardImage4
    // 추가 이미지 URL
];

const ImageBoard = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3000ms = 3초

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
      };
    

    return (
        <ImageContainer>
        <Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <Image key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </Slider>
        <Dots>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </Dots>
      </ImageContainer>
    );
};

const ImageContainer = styled.div`
  width: 840px;  /* 슬라이드 컨테이너의 너비 설정 */
  overflow: hidden; /* 넘치는 부분 숨기기 */
  position: relative; /* Dots의 위치를 설정하기 위해 부모 요소를 상대 좌표로 설정 */
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease; /* 슬라이드 전환 애니메이션 */
`;

const Image = styled.img`
  width: 840px;  
  height: 440px; 
  border-radius: 20px;  /* 모서리 둥글게 설정 */
`;

const Dots = styled.div`
  position: absolute;
  bottom: 10px; /* 하단 여백 */
  left: 50%;
  transform: translateX(-50%); /* 가운데 정렬 */
  display: flex;
  gap: 10px; /* 점들 간의 간격 */
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'darkblue' : 'lightgray')}; /* 활성화된 점 색상 */
  cursor: pointer; /* 클릭 가능 표시 */
`;



export default ImageBoard;