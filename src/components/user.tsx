import styled from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import ImageModal from "./image-modal";
import { useState } from "react";
import FollowButton from "./follow-btn";

interface User {
  id: string;
  userId: string;
  nickname: string;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const AvatarImg = styled.img`
  width: 50px;
  svg {
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
`;

const Column = styled.div``;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  cursor: pointer;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

const DeleteButton = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Userbox({ nickname, userId, id }: User) {
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const locationRef = ref(storage, `avatars/${userId}`);

  //아바타 주소 받아오기
  const getAvatarURL = async () => {
    if (userId === user?.uid) {
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
    navigate("/profile", { state: { targetUserId: userId } });
  };
  return (
    <Wrapper>
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
      {nickname}
      <FollowButton targetUserId={userId} />
    </Wrapper>
  );
}
