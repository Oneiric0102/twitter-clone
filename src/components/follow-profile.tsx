import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import FollowButton from "../components/follow-btn";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  ${(props) => props.theme.flex.rowBetweenCenter};
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 1rem;
  border-radius: 1rem;
  width: calc(100% - 2rem);
  height: 3rem;
`;
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
const UserInfo = styled.div`
  ${(props) => props.theme.flex.rowCenter};
  gap: 0.5rem;
  cursor: pointer;
`;

const AvatarImg = styled.img`
  width: 100%;
`;
const Name = styled.span`
  font-size: 1.25rem;
`;

interface FollowProfileProps {
  targetUserId: string;
  nickname: string;
}

const FollowProfile: React.FC<FollowProfileProps> = ({
  targetUserId,
  nickname,
}) => {
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState(user?.photoURL);
  const locationRef = ref(storage, `avatars/${targetUserId}`);
  const navigate = useNavigate();

  //아바타 주소 받아오기
  const getAvatarURL = async () => {
    if (targetUserId === user?.uid) {
      setAvatar(user?.photoURL!);
    } else {
      try {
        const photoURL = await getDownloadURL(locationRef);
        setAvatar(photoURL);
      } catch {
        setAvatar("");
      }
    }
  };
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

export default FollowProfile;
