import React, { useState } from "react";
import styled from "styled-components";
import InputForm from '../../component/inputForm/InputForm';
import Modal from '../../component/modal/Modal';
import useModal from '../../hooks/useModal';
import phoneImg from "../../images/phoneCertification.jpeg";
import { AuthRequest, AuthVerify } from "../../api/auth";
import { useMovePage } from "../../hooks/useMovePage";
import { defaultInputs } from "../../constants/formDefaults";


const CertificationPage = () => {
  const { moveTo } = useMovePage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [modalTitle, setModalTitle] = useState('SMS 본인 인증')
  const [authCode, setAuthCode] = useState('');
  const [modalState, setModalState] = useState('sendPrev')
  const [color, setColor] = useState(null);
  const [placeholder, setPlaceholder] = useState("인증번호 6자리를 입력하세요");

  const resetValues = () => {
    setName("");
    setPhone("");
    setAuthCode("");
    setModalState('sendPrev');
  };

  const { isOpen, openModal, closeModal } = useModal(resetValues);

  
  const sendAuthCodeInputValues = [
    {...defaultInputs, label: '이름', type: 'text', placeholder: '이름을 입력하세요', value: name, setValue: setName},
    { label: '전화번호', type: 'number', placeholder: "'-'를 제외하고 입력하세요", value: phone, setValue: setPhone },
  ];
  const checkAuthCodeInputValues = [
    {...defaultInputs, label: '인증번호', type: 'text', placeholder: placeholder, value: authCode, setValue: setAuthCode, color: color, timer: 180000},
    
  ];



  const authRequest = async () => {
    const AuthResult = await AuthRequest(name, phone);
    if(AuthResult===2000){
      setModalState('sendAfter');
      setModalTitle('인증번호 입력');
    }else{
      alert("인증번호 발송에 실패했습니다.");
    }
}

const authVerify = async () => {
  const result = await AuthVerify(phone, authCode);
  if(result){
    moveTo("/register", {authState: true, name: name, phone: phone});
    closeModal();
  }else{
    setAuthCode('');
    setPlaceholder('인증번호가 틀렸습니다!');
    setColor('red');

  }
}
 
const sendAuthCodeButtonValue = {value:"인증 요청", event:authRequest};
const checkAuthCodeButtonValue = {value:"확인", event:authVerify};

  return (
    <div>
      <TitleText>휴대폰 본인 인증</TitleText>
      <NoticeContainer>
        가입 여부 확인 및 개인정보 보호를 위해 본인 인증이 필요합니다.
      </NoticeContainer>
      <PhoneImage src={phoneImg} />
      <StyledButton onClick={openModal}>휴대폰 인증받기</StyledButton>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalTitle}>
      {
        modalState==="sendPrev" ? <InputForm inputValues={sendAuthCodeInputValues} buttonValue={sendAuthCodeButtonValue}/> :
        <InputForm inputValues={checkAuthCodeInputValues} buttonValue={checkAuthCodeButtonValue}/>
      }

        
        </Modal>
        <PanelContainer>
          <InfoItem>
            <Bullet />
            <ItemText>SurveyLink는 본인 확인을 위하여 휴대폰 인증을 사용합니다.</ItemText>
          </InfoItem>
          <InfoItem>
            <Bullet />
            <ItemText>SurveyLink는 회원님의 주민등록번호를 저장하지 않습니다.</ItemText>
          </InfoItem>
        </PanelContainer>
    </div>
  );
};

const TitleText = styled.h1`
  color: #023691;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  font: 800 33px Roboto, sans-serif;
`;

const NoticeContainer = styled.div`
  color: #444;
  text-align: center;
  margin-bottom: 40px;
  font: 400 17px/28.8px Roboto;
  @media (max-width: 991px) {
    font-size: 16px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
  }
`;

const PhoneImage = styled.img`
    display: block;
    margin: auto;
    width: 370px;
    height: auto;
`;

const StyledButton = styled.button`
    display: block;
    margin: auto;
    margin-top: 10px;
    width: 350px;
    height: 48px;
    background-color: #023691;
    color: #ffffff;
    border-radius: 10px;
    border: 1px solid #023691;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    font: 700 18px Roboto;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #012d7a;
    }
  
`;

const PanelContainer = styled.div`
  display: block;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 100px;
  width: 450px;
  background-color: #fafafa;
  border-radius: 20px;
  border: 1px solid #ddd;
  padding: 21px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Bullet = styled.div`
  width: 4px;
  height: 4px;
  background-color: #000000;
  border-radius: 2px;
`;

const ItemText = styled.p`
  color: #333;
  font: 400 15px/25.6px Roboto;
  margin: 0;
`;

export default CertificationPage;