import styled from "styled-components";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFollowers, getFollowing } from "../utils/followInfo";
import { useLocation, useNavigate } from "react-router-dom";
import FollowProfile from "../components/follow-profile";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Back = styled.button`
  width: 3rem;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 1rem;
  cursor: pointer;
`;

const Title = styled.div`
  ${(props) => props.theme.flex.rowLeftCenter};
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`;

const TitleName = styled.div`
  font-size: 1.5rem;
`;

const UserList = styled.div`
  ${(props) => props.theme.flex.columnCenter};
  width: calc(100% -2rem);
  padding: 1rem;
  gap: 1rem;
`;

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
  const [followers, setFollowers] = useState<UserInfo[]>([]);
  const [following, setFollowing] = useState<UserInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showFollowers, setShowFollowers] = useState<boolean>(true);
  const location = useLocation();
  const target = location.state.targetUserId;
  const navigate = useNavigate();

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
    setShowFollowers(location.state.showFollowers);
    if (target) {
      const fetchData = async () => {
        const [followersList, followingList] = await Promise.all([
          getFollowers(target),
          getFollowing(target),
        ]);
        const [followerInfo, followingInfo] = await Promise.all([
          getNickname(followersList),
          getNickname(followingList),
        ]);
        setFollowers(followerInfo);
        setFollowing(followingInfo);
        setLoading(false);
      };

      fetchData();
    }
  }, [target]);

  useEffect(() => {}, [followers, following]);

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
        <TitleName>{showFollowers ? "팔로우" : "팔로잉"}</TitleName>
      </Title>

      {showFollowers ? (
        followers.length === 0 ? (
          <NoneUser> 팔로우중인 유저가 없습니다. </NoneUser>
        ) : (
          <UserList>
            {followers.map((info) => (
              <FollowProfile
                targetUserId={info.userId}
                nickname={info.nickname}
              />
            ))}
          </UserList>
        )
      ) : following.length === 0 ? (
        <NoneUser> 팔로잉한 유저가 없습니다. </NoneUser>
      ) : (
        <UserList>
          {following.map((info) => (
            <FollowProfile
              targetUserId={info.userId}
              nickname={info.nickname}
            />
          ))}
        </UserList>
      )}
    </div>
  );
}
