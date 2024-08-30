import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

/*
  파일명 : src/components/google-btn.tsx
  용도 : 구글 로그인, 회원가입 버튼 컴포넌트
*/

//구글 버튼 컴포넌트 스타일
const Button = styled.span`
  ${(props) => props.theme.flex.rowCenter};
  background-color: ${(props) => props.theme.colors.primaryText};
  font-weight: bold;
  width: 100%;
  height: 2.625rem;
  color: ${(props) => props.theme.colors.background};
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryTextHover};
  }
`;

//구글 로고 사이즈 설정
const Logo = styled.img`
  height: 2.5rem;
`;

export default function GoogleButton() {
  const navigate = useNavigate();

  //구글 로그인, 회원가입 onClick 함수
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const signInInfo = await signInWithPopup(auth, provider);
      const uid = signInInfo.user.uid;
      const displayName = signInInfo.user.displayName;
      if (
        //생성 시간이 마지막 로그인시간, 즉 회원가입이라면
        signInInfo.user.metadata.creationTime ===
        signInInfo.user.metadata.lastSignInTime
      ) {
        //firebase store에 user 정보 추가
        await addDoc(collection(db, "users"), {
          userId: uid,
          nickname: displayName,
        });
      }
      //home으로 이동
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo src="./google-logo.svg" />
      Continue with Google
    </Button>
  );
}
