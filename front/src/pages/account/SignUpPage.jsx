import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useModal from "../../hooks/useModal";
import Modal from "../../component/modal/Modal";
import { useMovePage } from "../../hooks/useMovePage";
import InputForm from "../../component/inputForm/InputForm";
import { defaultInputs } from "../../constants/formDefaults";
import styled from "styled-components";

const SignUpPage = () => {
    const {moveTo} = useMovePage();
    const { isOpen, openModal, closeModal } = useModal();

    const location = useLocation();
    const { authState, name, phone } = location.state || {};

    const registerInputValues = [
        {...defaultInputs, label: '이름', type: 'text', value: name, disabled: true, essential: true},
        {...defaultInputs, label: '전화번호', type: 'number', value: phone, disabled: true, essential: true},
        {...defaultInputs, label: '전화번호', type: 'number', value: phone, essential: true},
        {...defaultInputs, label: '전화번호', type: 'number', value: phone, disabled: true},
        {...defaultInputs, label: '전화번호', type: 'number', value: phone, disabled: true},
        {...defaultInputs, label: '전화번호', type: 'number', value: phone, disabled: true},
      ];

    //   useEffect(() => {
    //     if (authState !== true) {
    //       alert("비정상적인 접근입니다.");
    //       moveTo(-1); // 이전 페이지로 이동
    //     }
    //     if(authState) openModal();        
    //   }, [authState]);

    return(
        <Container>
            {
                authState ? 
                <Modal isOpen={isOpen} onClose={closeModal} title="인증 완료">

                </Modal> : null
            }
            <Title>회원가입</Title>
            <p><span style={{color:'#B11111'}}>*</span> 표시는 필수 항목 입니다.</p>
            <InputForm inputValues={registerInputValues} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
    margin : 50px auto;
    width: 500px;
`;

const Title = styled.h1`
  color: #023691;
  font-size: 40px;
  margin: 0px auto;
`;
export default SignUpPage;