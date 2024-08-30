import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
  where,
} from "firebase/firestore";
import { ITweet } from "../components/timeline";
import Tweet from "../components/tweet";
import FollowButton from "../components/follow-btn";
import { useLocation, useNavigate } from "react-router-dom";
import { getFollowers, getFollowing } from "../utils/followInfo";

/*
  파일명 : src/routers/profile.tsx
  용도 : 유저 프로필 페이지
*/

//전체 컨테이너 스타일
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 0rem;
  gap: 20px;
`;

//아바타 업데이트 input 디자인, label 사용
const AvatarUpload = styled.label`
  width: 5rem;
  overflow: hidden;
  height: 5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: ${(props) => props.className};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 3rem;
  }
`;

//아바타 이미지 크기 설정
const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
`;

//파일첨푸 input 안보이게 설정
const AvatarInput = styled.input`
  display: none;
`;

//유저 닉네임 스타일
const Name = styled.span`
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 1.25rem;
`;

//유저 작성 트윗 목록 컨테이너 스타일
const Tweets = styled.div`
  ${(props) => props.theme.flex.columnCenterTop};
  width: calc(100% - 2rem);
  gap: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding: 1rem 1rem;
  margin-top: 1rem;
`;

//Row 기준으로 나열하기 위한 컨테이너
const Row = styled.div`
  ${(props) => props.theme.flex.rowCenter};
  gap: 1rem;
`;

//follow 페이지로 이동하기 위한 링크 스타일
const FollowLink = styled.a`
  ${(props) => props.theme.flex.rowCenter};
  gap: 0.5rem;
  cursor: pointer;
`;

//팔로잉, 팔로워 숫자 스타일
const FollowNumber = styled.div`
  color: ${(props) => props.theme.colors.primaryText};
  font-weight: bold;
`;

//팔로잉, 팔로워 문자 스타일
const FollowLabel = styled.div`
  color: ${(props) => props.theme.colors.secondaryText};
`;

//작성한 트윗이 없을경우 출력되는 요소
const NoneDiv = styled.div`
  ${(props) => props.theme.flex.rowCenter};
  width: 100%;
  padding: 5rem 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondaryText};
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;
const Profile: React.FC = () => {
  const user = auth.currentUser; //현재유저
  const location = useLocation();
  const target =
    location?.state?.targetUserId ||
    sessionStorage.getItem("profileTargetUID") ||
    user?.uid; //프로필 확인 대상 유저 uid
  const [nickname, setNickname] = useState(""); //대상 유저의 닉네임
  const [avatar, setAvatar] = useState(""); //대상 유저의 아바타
  const [tweets, setTweets] = useState<ITweet[]>([]); //대상 유저의 트윗 목록
  const [followers, setFollowers] = useState<String[]>([]); //대상 유저의 팔로워 목록
  const [following, setFollowing] = useState<String[]>([]); //대상 유저의 팔로잉 목록
  const locationRef = ref(storage, `avatars/${target}`); //대상 유저의 아바타 참조
  const navigate = useNavigate();

  //프로필 사진 리사이즈 함수
  const resizeImage = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject("Canvas context is not available");

        const { width, height } = img;
        const minDimension = Math.min(width, height);

        canvas.width = minDimension;
        canvas.height = minDimension;

        // 이미지의 중심 부분을 캔버스에 그리기
        ctx.drawImage(
          img,
          (width - minDimension) / 2,
          (height - minDimension) / 2,
          minDimension,
          minDimension,
          0,
          0,
          minDimension,
          minDimension
        );

        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Canvas is empty"));
          }
        }, file.type);
      };

      reader.readAsDataURL(file);
    });
  };

  //아바타 업데이트
  const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!user) return;
    if (files && files.length === 1) {
      const file = files[0];
      const resizedImageBlob = await resizeImage(file);
      const result = await uploadBytes(locationRef, resizedImageBlob);
      const avatarUrl = await getDownloadURL(result.ref);
      setAvatar(avatarUrl);
      await updateProfile(user, {
        photoURL: avatarUrl,
      });
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

  //유저 닉네임 받아오기
  const getNickname = async () => {
    if (target === user?.uid) {
      setNickname(user?.displayName!);
    } else {
      const nicknameQuery = query(
        collection(db, "users"),
        where("userId", "==", target)
      );

      try {
        const snapshot = await getDocs(nicknameQuery);
        setNickname(snapshot.docs[0].data().nickname);
      } catch {
        setNickname("");
      }
    }
  };

  //트윗 목록 불러오기
  useEffect(() => {
    //새로고침 오류 방지용 변수 저장
    sessionStorage.setItem("profileTargetUID", target);
    let unsubscrive: Unsubscribe | null = null;
    const fetchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        where("userId", "==", target),
        orderBy("createdAt", "desc"),
        limit(25)
      );
      unsubscrive = await onSnapshot(tweetsQuery, (snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          const { tweet, createdAt, userId, username, photo } = doc.data();
          return {
            tweet,
            createdAt,
            userId,
            username,
            photo,
            id: doc.id,
          };
        });
        setTweets(tweets);
      });
    };
    fetchTweets();
    return () => {
      unsubscrive && unsubscrive();
    };
  }, [target]);

  //팔로우 정보 가져오는 함수
  const fetchFolloweInfo = async () => {
    const followerList = await getFollowers(target);
    const followingList = await getFollowing(target);

    setFollowers(followerList);
    setFollowing(followingList);
  };

  const goToFollow = (showOption: string) => {
    navigate("/follow", {
      state: { targetUserId: target, showOption: showOption },
    });
  };

  //초기설정
  useEffect(() => {
    getAvatarURL();
    getNickname();
    fetchFolloweInfo();
  }, [target]);
  return (
    <Wrapper>
      <AvatarUpload
        htmlFor="avatar"
        className={user?.uid === target ? "pointer" : "default"}
      >
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
      </AvatarUpload>
      {user?.uid === target ? (
        <AvatarInput
          onChange={onAvatarChange}
          id="avatar"
          type="file"
          accept="image/*"
        />
      ) : null}
      <Name>{nickname ? nickname : "Anonymous"}</Name>
      <Row>
        <FollowLink onClick={() => goToFollow("follower")}>
          <FollowNumber>{followers.length}</FollowNumber>{" "}
          <FollowLabel>팔로워</FollowLabel>
        </FollowLink>
        <FollowLink onClick={() => goToFollow("following")}>
          <FollowNumber> {following.length} </FollowNumber>{" "}
          <FollowLabel>팔로잉</FollowLabel>
        </FollowLink>
      </Row>
      {user?.uid !== target ? <FollowButton targetUserId={target} /> : null}
      {tweets.length === 0 ? (
        <NoneDiv>작성한 트윗이 없습니다.</NoneDiv>
      ) : (
        <Tweets>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </Tweets>
      )}
    </Wrapper>
  );
};
export default Profile;
