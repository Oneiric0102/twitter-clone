import styled from "styled-components";
import { db } from "../firebase";
import { doc, getDoc, writeBatch } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const Button = styled.button`
  padding: 0.5rem 1.25rem;
  margin: 0.25rem 0;
  border-radius: 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  width: 10rem;
  color: ${(props) => props.theme.colors.primaryText};
  &.follow {
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    &:hover {
      background-color: ${(props) => props.theme.colors.primaryHover};
    }
  }
  &.following {
    background-color: ${(props) => props.theme.colors.surface};
    border: 2px solid ${(props) => props.theme.colors.border};
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
  background-color: ${(props) => props.theme.colors.primaryText};
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryTextHover};
  }
`;

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
    return (
      <Button disabled className="following">
        Loading...
      </Button>
    );
  }

  return isFollowing ? (
    <Button onClick={handleUnfollow} className="following">
      팔로잉
    </Button>
  ) : (
    <Button onClick={handleFollow} className="follow">
      팔로우하기
    </Button>
  );
};

export default FollowButton;
