import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import Timeline from "../components/timeline";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFollowers, getFollowing } from "../utils/followInfo";
import { useLocation } from "react-router-dom";
import FollowButton from "../components/follow-btn";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
  &::-webkit-scrollbar {
    display: none;
  }
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
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const location = useLocation();
  const target = location.state.targetUserId;

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

  const handleToggle = () => {
    setShowFollowers(!showFollowers);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button onClick={handleToggle}>
        {showFollowers ? "Show Following" : "Show Followers"}
      </button>
      <h2>{showFollowers ? "Followers" : "Following"}</h2>
      {showFollowers ? (
        <ul>
          {followers.map((info) => (
            <>
              <li key={info.userId}>{info.nickname}</li>
              <FollowButton targetUserId={info.userId} />
            </>
          ))}
        </ul>
      ) : (
        <ul>
          {following.map((info) => (
            <>
              <li key={info.userId}>{info.nickname}</li>
              <FollowButton targetUserId={info.userId} />
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
