import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";
import { getFollowing } from "../utils/followInfo";

export interface ITweet {
  id: string;
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
  createdAt: Timestamp;
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export default function Timeline() {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const [following, setFollowing] = useState<String[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      if (following) {
        const fetchData = async () => {
          const followingList = await getFollowing(currentUser.uid);
          setFollowing(followingList);
          setFollowing((current) => [currentUser.uid, ...current]);
          setLoading(false);
        };

        fetchData();
      } else {
        setFollowing([currentUser.uid]);
      }
    }
  }, [currentUser]);

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
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}
