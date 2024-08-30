import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";
import ProtectedRoute from "./components/protected-route";
import Follow from "./routes/follow";
import Search from "./routes/search";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./globalStyles";

const Wrapper = styled.div`
  ${theme.flex.rowCenter};
`;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/follow",
          element: <Follow />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/create-account",
      element: <CreateAccount />,
    },
  ],
  {
    basename: "/twitter-clone",
  }
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
