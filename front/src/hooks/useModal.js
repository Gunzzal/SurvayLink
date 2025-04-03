// src/hooks/useModal.js
import { useState } from "react";

function useModal(resetValues) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    if(resetValues){
      resetValues();  // ✅ 모달이 닫힐 때 추가 실행할 함수 (ex: 입력값 초기화)
    }
  };

  return { isOpen, openModal, closeModal };
}

export default useModal;
