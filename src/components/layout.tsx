import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5rem auto;
  width: 100%;
  height: 100vh;
  //overflow-y: hidden;
  max-width: 64rem;
  @media (max-width: 767px) {
    grid-template-columns: none;
    grid-template-rows: auto 5rem;
    gap: 0;
  }
`;
const OutletWrapper = styled.div`
  margin: 0.5rem 0;
  overflow-y: auto;
  height: calc(100vh - 1rem);
  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.scrollTrack};
    border-radius: 0.1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.border};
    border-radius: 0.1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary40};
  }

  @media (max-width: 767px) {
    height: auto;
    margin: 0;
  }
`;
const Menu = styled.div`
  ${(props) => props.theme.flex.columnCenterTop};
  gap: 1.5rem;
  padding: 3rem 0;
  height: calc(100vh - 6rem);
  border-right: 0.0625rem solid ${(props) => props.theme.colors.border};
  @media (max-width: 767px) {
    height: auto;
    ${(props) => props.theme.flex.rowBetweenCenter};
    padding: 0 3rem;
    border-left: none;
    border-top: 0.0625rem solid ${(props) => props.theme.colors.border};
  }
`;
const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: ${(props) => props.theme.colors.primaryText};
    &:hover {
      fill: ${(props) => props.theme.colors.secondaryTextHover};
    }
  }
  &.log-out {
    svg {
      fill: ${(props) => props.theme.colors.delete};
      &:hover {
        fill: ${(props) => props.theme.colors.deleteHover};
      }
    }
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
  transition: all 0.2s ease-out;
`;

export default function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const navigate = useNavigate();
  const onLogOut = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Wrapper>
        {isMobile ? (
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        ) : null}
        <Menu>
          <Link
            to="/profile"
            state={{
              targetUserId: auth.currentUser?.uid,
            }}
          >
            <MenuItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </MenuItem>
          </Link>
          <Link to="/search">
            <MenuItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </MenuItem>
          </Link>
          <Link to="/">
            <MenuItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </MenuItem>
          </Link>
          <MenuItem onClick={onLogOut} className="log-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </MenuItem>
        </Menu>
        {isMobile ? null : (
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        )}
      </Wrapper>
    </>
  );
}
