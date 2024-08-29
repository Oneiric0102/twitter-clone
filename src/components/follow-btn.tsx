import styled from "styled-components";
import { db } from "../firebase";
import { doc, getDoc, writeBatch } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

/*
  파일명 : src/components/follow-btn.tsx
  용도 : 팔로우 여부에 따라 팔로우, 팔로우 취소로 바뀌는 버튼 컴포넌트 
*/

//팔로우 버튼 스타일
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

//팔로우 함수
const followUser = async (
  currentUserId: string,
  targetUserId: string
): Promise<void> => {
  const batch = writeBatch(db);

  //현재 유저의 팔로잉 목록에 목표 유저 추가
  const currentUserFollowingRef = doc(
    db,
    "following",
    currentUserId,
    "follows",
    targetUserId
  );
  //목표 유저의 팔로워 목록에 현재 유저 추가
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

//언팔로우 함수
const unfollowUser = async (
  currentUserId: string,
  targetUserId: string
): Promise<void> => {
  const batch = writeBatch(db);

  //현재 유저의 팔로잉 목록에서 대상 유저 삭제
  const currentUserFollowingRef = doc(
    db,
    "following",
    currentUserId,
    "follows",
    targetUserId
  );
  //타겟 유저의 팔로워 목록에서 대상 유저 삭제
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

//팔로우 버튼 컴포넌트 Props 목록 정의
interface FollowButtonProps {
  targetUserId: string;
}

const FollowButton: React.FC<FollowButtonProps> = ({ targetUserId }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false); //현재 유저가 대상 유저를 팔로우 하고 있는지 여부
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth();
  const currentUser = auth.currentUser; //현재 유저

  //isFollowing 초기화
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

  //팔로우 버튼 onClick 함수
  const handleFollow = async () => {
    if (currentUser) {
      setLoading(true);
      await followUser(currentUser.uid, targetUserId);
      setIsFollowing(true);
      setLoading(false);
    }
  };

  //언팔로우 버튼 onClick 함수
  const handleUnfollow = async () => {
    if (currentUser) {
      setLoading(true);
      await unfollowUser(currentUser.uid, targetUserId);
      setIsFollowing(false);
      setLoading(false);
    }
  };

  //팔로우 정보를 업데이트 중이라면 버튼 비활성화
  if (loading) {
    return (
      <Button disabled className="following">
        Loading...
      </Button>
    );
  }

  //팔로우 중이라면
  return isFollowing ? (
    <Button onClick={handleUnfollow} className="following">
      팔로잉
    </Button> //팔로우중임을 표시하고 언팔로우 버튼 반환
  ) : (
    <Button onClick={handleFollow} className="follow">
      팔로우하기
    </Button> //팔로우중이 아니라면 팔로우 버튼 반환
  );
};

export default FollowButton;
