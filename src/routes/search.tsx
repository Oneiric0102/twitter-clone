import React, { useState } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import Userbox from "../components/user";
import Tweet from "../components/tweet";

interface User {
  id: string;
  userId: string;
  nickname: string;
}

interface Tweet {
  id: string;
  createdAt: Timestamp;
  tweet: string;
  userId: string;
  username: string;
  photo?: string;
}

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userResults, setUserResults] = useState<User[]>([]);
  const [tweetResults, setTweetResults] = useState<Tweet[]>([]);

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
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for users or tweets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h2>User Results</h2>
      <ul>
        {userResults.map((user) => (
          <li key={user.id}>
            <Userbox {...user} />
          </li>
        ))}
      </ul>

      <h2>Tweet Results</h2>
      <ul>
        {tweetResults.map((tweet) => (
          <li key={tweet.id}>
            <Tweet {...tweet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
