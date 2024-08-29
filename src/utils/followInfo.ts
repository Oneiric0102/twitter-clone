import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

/*
  파일명 : src/utils/followInfo.ts
  용도 : 팔로워, 팔로잉 목록 얻어오는 공용 함수
*/

export const getFollowers = async (userId: string): Promise<string[]> => {
  const followersRef = collection(db, "followers", userId, "followedBy");
  const snapshot = await getDocs(followersRef);
  return snapshot.docs.map((doc) => doc.id);
};

export const getFollowing = async (userId: string): Promise<string[]> => {
  const followingRef = collection(db, "following", userId, "follows");
  const snapshot = await getDocs(followingRef);
  return snapshot.docs.map((doc) => doc.id);
};
