import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";
import { getFollowing } from "../utils/followInfo";

/*
  파일명 : src/components/timeline.tsx
  용도 : home페이지 트윗 목록
*/

export interface ITweet {
  id: string;
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
  createdAt: number;
}

//목록 전체 컨테이너 스타일
const Wrapper = styled.div`
  ${(props) => props.theme.flex.columnCenterTop};
  width: calc(100% - 2rem);
  gap: 1rem;
  border-top: 0.0625rem solid ${(props) => props.theme.colors.border};
  padding: 1rem 1rem;
`;

//트윗이 없을 경우 출력되는 문구 스타일
const NoneDiv = styled.div`
  ${(props) => props.theme.flex.rowCenter};
  width: 100%;
  padding: 5rem 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export default function Timeline() {
  const [tweets, setTweets] = useState<ITweet[]>([]); //트윗 목록
  const [following, setFollowing] = useState<String[]>([]); //팔로우중인 유저 목록
  const [loading, setLoading] = useState<boolean>(true);
  const currentUser = auth.currentUser; //현재 유저

  useEffect(() => {
    if (currentUser) {
      //로그인 되어있다면 팔로잉 목록 업데이트
      const fetchData = async () => {
        const followingList = await getFollowing(currentUser.uid);
        setFollowing(followingList);
        setFollowing((current) => [currentUser.uid, ...current]);
        setLoading(false);
      };

      fetchData();
    }
  }, [currentUser]);

  //팔로잉 목록 변경 시 트윗 목록 업데이트
  useEffect(() => {
    if (following.length > 0) {
      let unsubscrive: Unsubscribe | null = null;
      const fetchTweets = async () => {
        const tweetsQuery = query(
          collection(db, "tweets"),
          orderBy("createdAt", "desc"),
          where("userId", "in", following),
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
    }
  }, [following]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      {tweets.length === 0 ? (
        <NoneDiv>타임라인에 트윗이 없습니다.</NoneDiv>
      ) : (
        tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} />)
      )}
    </Wrapper>
  );
}
