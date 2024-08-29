import styled from "styled-components";
import { auth, storage } from "../firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import FollowButton from "./follow-btn";
import { useNavigate } from "react-router-dom";

/*
  파일명 : src/components/user.tsx
  용도 : 검색, 팔로우 페이지에서 출력되는 유저 컴포넌트
*/

//유저 컴포넌트 컨테이너 스타일
const Wrapper = styled.div`
  ${(props) => props.theme.flex.rowBetweenCenter};
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 1rem;
  border-radius: 1rem;
  width: calc(100% - 2rem);
  height: 3rem;
`;

//유저 아바타 이미지 컨테이너
const AvatarWrapper = styled.div`
  width: 2rem;
  overflow: hidden;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1rem;
  }
`;

//유저 아바타, 닉네임을 왼쪽에 정렬하기 위한 컨테이너
const UserInfo = styled.div`
  ${(props) => props.theme.flex.rowCenter};
  gap: 0.5rem;
  cursor: pointer;
`;

//아바타 이미지 크기 설정
const AvatarImg = styled.img`
  width: 100%;
`;

//유저 닉네임 폰트 크기 설정
const Name = styled.span`
  font-size: 1.25rem;
`;

//유저 컴포넌트 Props 타입 정의
interface UserProps {
  targetUserId: string;
  nickname: string;
}

const User: React.FC<UserProps> = ({ targetUserId, nickname }) => {
  const user = auth.currentUser; //현재 유저
  const [avatar, setAvatar] = useState(user?.photoURL); //유저의 아바타 url
  const locationRef = ref(storage, `avatars/${targetUserId}`); //유저 아바타 참조 객체
  const navigate = useNavigate();

  //아바타 주소 받아오기
  const getAvatarURL = async () => {
    try {
      const photoURL = await getDownloadURL(locationRef);
      setAvatar(photoURL);
    } catch {
      setAvatar("");
    }
  };

  //유저 정보 클릭시 프로필로 이동하는 함수
  const goToProfile = () => {
    navigate("/profile", { state: { targetUserId: targetUserId } });
  };

  useEffect(() => {
    getAvatarURL();
  }, [targetUserId]);
  return (
    <Wrapper>
      <UserInfo onClick={goToProfile}>
        <AvatarWrapper>
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
        <Name>{nickname ?? "Anonymous"}</Name>
      </UserInfo>
      {user?.uid !== targetUserId ? (
        <FollowButton targetUserId={targetUserId} />
      ) : null}
    </Wrapper>
  );
};

export default User;
