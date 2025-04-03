import React, { useEffect } from "react";
import styled from "styled-components";


const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <Overlay onMouseDown={onClose}>
            <Container onMouseDown={(e) => e.stopPropagation()}>
                <Title>{title}</Title>
                <CloseButton onClick={onClose}>✖</CloseButton>
                <Content>{children}</Content>
            </Container>
        </Overlay>

    )
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  position: relative;
`;

const Title = styled.h2`
  color: #023691;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 10px;
`;



export default Modal;