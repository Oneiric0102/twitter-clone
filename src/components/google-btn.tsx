import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

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

const Logo = styled.img`
  height: 2.5rem;
`;

export default function GoogleButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const signInInfo = await signInWithPopup(auth, provider);
      const uid = signInInfo.user.uid;
      const displayName = signInInfo.user.displayName;
      if (
        signInInfo.user.metadata.creationTime ===
        signInInfo.user.metadata.lastSignInTime
      ) {
        await addDoc(collection(db, "users"), {
          userId: uid,
          nickname: displayName,
        });
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo src="/google-logo.svg" />
      Continue with Google
    </Button>
  );
}
