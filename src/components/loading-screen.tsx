import { styled } from "styled-components";

/*
  파일명 : src/components/loading-screen.tsx
  용도 : 로딩중일 때 표시되는 페이지
*/

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;
export default function LoadingScreen() {
  return (
    <Wrapper>
      <Text>Loading...</Text>
    </Wrapper>
  );
}
