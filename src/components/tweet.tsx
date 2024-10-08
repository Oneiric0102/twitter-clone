import styled from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import ImageModal from "./image-modal";
import { useEffect, useState } from "react";

/*
  파일명 : src/components/tweet.tsx
  용도 : 개별 트윗 컴포넌트
*/

//트윗 컨테이너 스타일
const Wrapper = styled.div`
  display: grid;
  width: calc(100% - 2.5rem);
  min-height: 8rem;
  grid-template-columns: auto 8rem;
  padding: 1.25rem;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 1rem;
  align-items: start;
`;

//column방향으로 요소를 나열하기 위한 컨테이너
const Column = styled.div`
  ${(props) => props.theme.flex.columnLeftCenter};
  gap: 0.5rem;
`;

//유저 아바타 스타일
const AvatarWrapper = styled.div`
  width: 1.5rem;
  overflow: hidden;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1rem;
  }
`;

//유저 아바타, 닉네임 등 내용이 아닌 정보를 담고있는 컨테이너
const InfoContainer = styled.div`
  ${(props) => props.theme.flex.rowLeftCenter};
  gap: 0.5rem;
`;

//아바타 이미지 크기 조정
const AvatarImg = styled.img`
  width: 100%;
`;

//업로드 날짜 스타일
const DateWrapper = styled.div`
  color: ${(props) => props.theme.colors.secondaryText};
  font-size: 0.75rem;
`;

//첨부된 사진 스타일
const Photo = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  cursor: pointer;
`;

//유저 이름 스타일
const Username = styled.span`
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`;

//트윗 내용 컨테이너
const Payload = styled.p`
  margin: 0.75rem 0;
  font-size: 1rem;
`;

//트윗 삭제 버튼 스타일
const DeleteButton = styled.button`
  ${(props) => props.theme.flex.rowCenter};
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.delete};
  border-radius: 50%;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  svg {
    width: 1rem;
  }
  &:hover {
    color: ${(props) => props.theme.colors.deleteHover};
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default function Tweet({
  username,
  photo,
  tweet,
  userId,
  id,
  createdAt,
}: ITweet) {
  const user = auth.currentUser; //현재 유저
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); //트윗 첨부 이미지 모달창 오픈 여부
  const [avatar, setAvatar] = useState(""); //트윗 작성자 아바타 url
  const locationRef = ref(storage, `avatars/${userId}`); //유저 아바타 참조 객체

  //이미지 모달창 여는 함수
  const openModal = () => {
    setIsOpen(true);
  };

  //이미지 모달창 닫는 함수
  const closeModal = () => {
    setIsOpen(false);
  };

  //트윗 삭제 함수
  const onDelete = async () => {
    const delConfirm = confirm("트윗을 삭제하시겠습니까?");
    if (!delConfirm || user?.uid !== userId) return;

    try {
      await deleteDoc(doc(db, "tweets", id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  //유저 정보 클릭시 프로필 페이지로 이동하는 함수
  const goToProfile = () => {
    navigate("/profile", { state: { targetUserId: userId } });
  };

  //날짜 포매팅 함수
  const formatTimestamp = (createdAt: number): string => {
    const date = new Date(createdAt);
    const now = new Date();
    const diff = (now.getTime() - date.getTime()) / 1000; // 초 단위 차이 계산

    // 분, 시간, 일, 월, 년에 대한 시간 간격
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const year = day * 365;

    if (diff < minute) {
      return `${Math.floor(diff)}초 전`;
    } else if (diff < hour) {
      return `${Math.floor(diff / minute)}분 전`;
    } else if (diff < day) {
      return `${Math.floor(diff / hour)}시간 전`;
    } else if (diff < week) {
      return `${Math.floor(diff / day)}일 전`;
    } else if (diff < year) {
      // "월 일" 형식 (예: 7월 6일)
      return new Intl.DateTimeFormat("ko-KR", {
        month: "short",
        day: "numeric",
      }).format(date);
    } else {
      // "연도 월 일" 형식 (예: 2023년 4월 3일)
      return new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).format(date);
    }
  };

  //아바타 주소 받아오기
  const getAvatarURL = async () => {
    try {
      const photoURL = await getDownloadURL(locationRef);
      setAvatar(photoURL);
    } catch {
      setAvatar("");
    }
  };

  //초기설정
  useEffect(() => {
    getAvatarURL();
  }, [userId]);
  return (
    <Wrapper>
      <Column>
        <InfoContainer>
          <AvatarWrapper onClick={goToProfile}>
            {avatar ? (
              <AvatarImg src={avatar} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </AvatarWrapper>
          <Username onClick={goToProfile}>{username}</Username>
          <DateWrapper>{formatTimestamp(createdAt)}</DateWrapper>
          {user?.uid === userId ? (
            <DeleteButton onClick={onDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </DeleteButton>
          ) : null}
        </InfoContainer>
        <Payload>{tweet}</Payload>
      </Column>
      {photo ? (
        <Column>
          <Photo onClick={() => openModal()} src={photo} />
          <ImageModal isOpen={isOpen} imageUrl={photo} onClose={closeModal} />
        </Column>
      ) : null}
    </Wrapper>
  );
}
