import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
  Error,
  Input,
  Switcher,
  XLogo,
  Wrapper,
  Form,
  Button,
} from "../components/auth-components";
import GoogleButton from "../components/google-btn";

/*
  파일명 : src/routes/login.tsx
  용도 : 로그인 페이지
*/

//로그인 Form 입력 타입 정의
type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //로그인 Form
  const { register, handleSubmit } = useForm<Inputs>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //로그인 Submit 함수
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setError("");
    if (isLoading || data.email === "" || data.password === "") return;
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError("로그인 정보가 올바르지 않습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <XLogo />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: true,
          })}
          placeholder="Email"
          type="text"
          inputMode="email"
        />
        <Input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
        <Switcher>
          계정이 없으신가요? <Link to="/create-account">가입하기 &rarr;</Link>
        </Switcher>
        {error !== "" ? <Error>{error}</Error> : null}
        <Button type="submit" value={isLoading ? "Loading..." : "Log in"} />
      </Form>
      <GoogleButton />
    </Wrapper>
  );
}
