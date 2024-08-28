import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Userbox from "../components/user";
import Tweet from "../components/tweet";
import styled from "styled-components";
import FollowProfile from "../components/follow-profile";

interface User {
  id: string;
  userId: string;
  nickname: string;
}

interface Tweet {
  id: string;
  createdAt: number;
  tweet: string;
  userId: string;
  username: string;
  photo?: string;
}

const Wrapper = styled.div`
  ${(props) => props.theme.flex.columnLeftCenter};
  padding: 2.5rem 1rem;
  gap: 1rem;
`;

const SearchDiv = styled.div`
  display: grid;
  width: calc(100%);
  grid-template-columns: auto 3rem;
  gap: 0.5rem;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.75rem 1.25rem;
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  border: 2px solid transparent;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primaryText};
  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryText};
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;

const SearchButton = styled.button`
  ${(props) => props.theme.flex.rowCenter};
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
  }
  transition: all 0.2s ease-out;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 1rem;
`;

const NoneDiv = styled.div`
  ${(props) => props.theme.flex.rowCenter};
  width: 100%;
  padding: 5rem 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userResults, setUserResults] = useState<User[]>([]);
  const [tweetResults, setTweetResults] = useState<Tweet[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    // 유저 검색
    const usersRef = collection(db, "users");
    const userSnapshots = await getDocs(usersRef);
    const users = userSnapshots.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as User))
      .filter((user) =>
        user.nickname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setUserResults(users);

    // 트윗 검색
    const tweetsRef = collection(db, "tweets");
    const tweetSnapshots = await getDocs(tweetsRef);
    const tweets = tweetSnapshots.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as Tweet))
      .filter((tweetDoc) =>
        tweetDoc.tweet.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setTweetResults(tweets);
    setSearched(true);
  };

  useEffect(() => {
    setSearched(false);
  }, [searchTerm]);

  return (
    <Wrapper>
      <SearchDiv>
        <SearchInput
          type="text"
          placeholder="검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </SearchButton>
      </SearchDiv>
      {!searched &&
      userResults.length === 0 &&
      tweetResults.length === 0 ? null : (
        <>
          <Title>유저</Title>
          {userResults.length === 0 ? (
            <NoneDiv>일치하는 유저가 없습니다.</NoneDiv>
          ) : (
            userResults.map((user) => (
              <FollowProfile
                key={user.id}
                targetUserId={user.id}
                nickname={user.nickname}
              />
            ))
          )}
          <Title>트윗</Title>
          {tweetResults.length === 0 ? (
            <NoneDiv>일치하는 트윗이 없습니다.</NoneDiv>
          ) : (
            tweetResults.map((tweet) => <Tweet {...tweet} />)
          )}
        </>
      )}

      {}
    </Wrapper>
  );
};

export default SearchPage;
