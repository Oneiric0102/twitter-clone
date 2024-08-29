import React from "react";
import styled from "styled-components";

/*
  파일명 : src/components/image-modal.tsx
  용도 : 트윗의 사진 클릭 시 팝업되는 이미지 모달 창
*/

//모달 컴포넌트에 전달할 Props 타입 정의
interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

//모달 오픈 시 배경 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.modalBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

//이미지와 버튼이 포함된 모달 창 본문 스타일
const ModalContent = styled.div`
  ${(props) => props.theme.flex.columnRightCenter};
  position: relative;
  padding: 1rem;
  border-radius: 0.5rem;
`;

//화면에 표시되는 이미지 스타일
const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin-bottom: 0.75rem;
`;

//새 탭에 이미지 원본 표시하는 버튼 스타일
const NewTab = styled.button`
  color: ${(props) => props.theme.colors.secondaryText};
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.secondaryTextHover};
  }
  transition: all 0.1s ease;
`;

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen, //모달 오픈 여부
  imageUrl, //이미지 src
  onClose, //모달 창 닫는 함수
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={onClose}>
        <ModalImage
          onClick={(e) => e.stopPropagation()}
          src={imageUrl}
          alt="Modal"
        />
        <NewTab onClick={() => window.open(imageUrl, "_blank")}>
          원본보기
        </NewTab>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageModal;
