import styled from "styled-components";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { getFollowers, getFollowing } from "../utils/followInfo";
import { useLocation, useNavigate } from "react-router-dom";
import User from "../components/user";

/*
  파일명 : src/routers/follow.tsx
  용도 : 팔로워, 팔로잉 목록 페이지
*/

//뒤로가기 버튼 스타일
const Back = styled.button`
  width: 3rem;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 1rem;
  cursor: pointer;
`;

//상단 제목 스타일
const Title = styled.div`
  ${(props) => props.theme.flex.rowLeftCenter};
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`;

//상단 제목 폰트 크기 설정
const TitleName = styled.div`
  font-size: 1.5rem;
`;

//팔로우,팔로잉 목록 스타일
const UserList = styled.div`
  ${(props) => props.theme.flex.columnCenter};
  width: calc(100% -2rem);
  padding: 1rem;
  gap: 1rem;
`;

//유저 목록이 없을 경우 메세지 스타일
const NoneUser = styled.div`
  ${(props) => props.theme.flex.rowCenter};
  width: 100%;
  padding: 5rem 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

interface UserInfo {
  userId: string;
  nickname: string;
}

export default function Follow() {
  const location = useLocation();
  const [followers, setFollowers] = useState<UserInfo[]>([]); //팔로워 목록
  const [following, setFollowing] = useState<UserInfo[]>([]); //팔로잉 목록
  const [loading, setLoading] = useState<boolean>(true);
  const showOption =
    location?.state?.showOption ||
    sessionStorage.getItem("showOption") ||
    "follower";

  const target =
    location?.state?.targetUserId ||
    sessionStorage.getItem("followTargetUID") ||
    ""; //목록 출력 대상 유저 uid

  const navigate = useNavigate();

  //uid로 유저 닉네임 가져오는 함수
  const getNickname = async (userIds: string[]) => {
    let result: UserInfo[] = [];
    for (let userId of userIds) {
      const nicknameQuery = query(
        collection(db, "users"),
        where("userId", "==", userId)
      );

      try {
        const snapshot = await getDocs(nicknameQuery);
        result.push({
          userId: userId,
          nickname: snapshot.docs[0].data().nickname,
        });
      } catch {}
    }
    return result;
  };

  useEffect(() => {
    //새로고침 오류 방지용 변수 저장
    sessionStorage.setItem("followTargetUID", target);
    //대상 유저가 존재한다면
    if (target) {
      //팔로우, 팔로잉 데이터 가져오기
      const fetchData = async () => {
        if (showOption === "follower") {
          const followersList = await getFollowers(target);
          const followerInfo = await getNickname(followersList);

          setFollowers(followerInfo);
        } else {
          const followingList = await getFollowing(target);
          const followingInfo = await getNickname(followingList);

          setFollowing(followingInfo);
        }
        setLoading(false);
      };

      fetchData();
    }
  }, [target]);

  useEffect(() => {
    sessionStorage.setItem("showOption", showOption);
  }, [showOption]);

  const handleBackClick = () => {
    navigate(-1);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Title>
        <Back onClick={handleBackClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Back>
        <TitleName>{showOption === "follower" ? "팔로워" : "팔로잉"}</TitleName>
      </Title>

      {showOption === "follower" ? (
        followers.length === 0 ? (
          <NoneUser> 팔로워가 없습니다. </NoneUser>
        ) : (
          <UserList>
            {followers.map((info) => (
              <User targetUserId={info.userId} nickname={info.nickname} />
            ))}
          </UserList>
        )
      ) : following.length === 0 ? (
        <NoneUser> 팔로잉한 유저가 없습니다. </NoneUser>
      ) : (
        <UserList>
          {following.map((info) => (
            <User targetUserId={info.userId} nickname={info.nickname} />
          ))}
        </UserList>
      )}
    </div>
  );
}
