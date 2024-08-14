import styled from "styled-components";
import { db } from "../firebase";
import { doc, getDoc, writeBatch } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const followUser = async (
  currentUserId: string,
  targetUserId: string
): Promise<void> => {
  const batch = writeBatch(db);

  const currentUserFollowingRef = doc(
    db,
    "following",
    currentUserId,
    "follows",
    targetUserId
  );
  const targetUserFollowersRef = doc(
    db,
    "followers",
    targetUserId,
    "followedBy",
    currentUserId
  );

  batch.set(currentUserFollowingRef, {});
  batch.set(targetUserFollowersRef, {});

  await batch.commit();
};

const unfollowUser = async (
  currentUserId: string,
  targetUserId: string
): Promise<void> => {
  const batch = writeBatch(db);

  const currentUserFollowingRef = doc(
    db,
    "following",
    currentUserId,
    "follows",
    targetUserId
  );
  const targetUserFollowersRef = doc(
    db,
    "followers",
    targetUserId,
    "followedBy",
    currentUserId
  );

  batch.delete(currentUserFollowingRef);
  batch.delete(targetUserFollowersRef);

  await batch.commit();
};

interface FollowButtonProps {
  targetUserId: string;
}

const FollowButton: React.FC<FollowButtonProps> = ({ targetUserId }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      const checkIfFollowing = async () => {
        const followingRef = doc(
          db,
          "following",
          currentUser.uid,
          "follows",
          targetUserId
        );
        const docSnapshot = await getDoc(followingRef);
        setIsFollowing(docSnapshot.exists());
        setLoading(false);
      };

      checkIfFollowing();
    }
  }, [currentUser, targetUserId, db]);

  const handleFollow = async () => {
    if (currentUser) {
      setLoading(true);
      await followUser(currentUser.uid, targetUserId);
      setIsFollowing(true);
      setLoading(false);
    }
  };

  const handleUnfollow = async () => {
    if (currentUser) {
      setLoading(true);
      await unfollowUser(currentUser.uid, targetUserId);
      setIsFollowing(false);
      setLoading(false);
    }
  };

  if (loading) {
    return <button disabled>Loading...</button>;
  }

  return isFollowing ? (
    <button onClick={handleUnfollow}>Unfollow</button>
  ) : (
    <button onClick={handleFollow}>Follow</button>
  );
};

export default FollowButton;
