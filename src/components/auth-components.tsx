import styled from "styled-components";

/*
  파일명 : src/components/auth-components.tsx
  용도 : 로그인, 회원가입 공용 스타일 작성
*/

//로그인, 회원가입 폼 컨테이너 스타일
export const Wrapper = styled.div`
  ${(props) => props.theme.flex.columnCenterTop};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26rem;
  padding: 4rem 0;
`;

//로그인, 회원가입 폼 스타일
export const Form = styled.form`
  ${(props) => props.theme.flex.columnCenter}
  margin-top: 3rem;
  margin-bottom: 0.75rem;
  gap: 0.75rem;
  width: 100%;
`;

//이메일, 비밀번호 등 인풋 스타일
export const Input = styled.input`
  padding: 0.75rem 1.25rem;
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  border: 0.125rem solid transparent;
  width: calc(100% - 2.5rem);
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primaryText};
  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryText};
  }
  &:focus {
    border: 0.125rem solid ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;

//로그인버튼, 회원가입버튼  스타일
export const Button = styled.input`
  padding: 0.75rem 1.25rem;
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryText};
  font-weight: bold;
  color: ${(props) => props.theme.colors.background};
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryTextHover};
  }
`;

//에러메세지 스타일
export const Error = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.delete};
`;

//로그인, 회원가입 간 토글 링크 스타일
export const Switcher = styled.span`
  width: 100%;
  margin-bottom: 1.5rem;
  a {
    color: ${(props) => props.theme.colors.primary};
  }
`;

//상단 로고 컨테이너 스타일
const LogoContainer = styled.div`
  width: 25%;
  margin: 2.5rem 0;
  ${(props) => props.theme.flex.rowCenter};
  svg {
    width: 100%;
    fill: ${(props) => props.theme.colors.primaryText};
  }
`;

//상단 로고 컴포넌트
export const XLogo = () => {
  return (
    <LogoContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300.251"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
      </svg>
    </LogoContainer>
  );
};
