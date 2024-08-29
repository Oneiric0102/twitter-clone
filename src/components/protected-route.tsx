import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

/*
  파일명 : src/components/protected-route.tsx
  용도 : 로그인 하지 않고 메인 서비스에 접속하는것 방지
*/

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/login" />;
  }

  return children;
}
