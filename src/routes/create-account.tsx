import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth, db } from "../firebase";
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
import { addDoc, collection } from "firebase/firestore";

/*
  파일명 : src/routes/create-account.tsx
  용도 : 회원가입 페이지
*/

//회원가입 Form 입력 타입 정의
type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); //화면에 출력될 에러메세지

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //이메일 유효성 검증 정규표현식

  //회원가입 Form
  const { register, handleSubmit } = useForm<Inputs>({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  //회원가입 Submit 함수
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setError("");
    if (isLoading) {
      return;
    } else if (data.name === "") {
      setError("닉네임을 입력해주세요");
      return;
    } else if (data.name.length < 2 || data.name.length > 12) {
      setError("닉네임은 2글자 이상, 12글자 이하만 가능합니다");
      return;
    } else if (data.email === "") {
      setError("이메일을 입력해주세요");
      return;
    } else if (!emailRegex.test(data.email)) {
      setError("이메일이 유효하지 않습니다");
      return;
    } else if (data.password === "") {
      setError("비밀번호를 입력해주세요");
      return;
    } else if (data.password.length < 8 || data.name.length > 16) {
      setError("비밀번호는 8글자 이상, 16글자 이하만 가능합니다");
      return;
    }

    console.log(error);
    try {
      setIsLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(credentials.user, {
        displayName: data.name,
      });
      await addDoc(collection(db, "users"), {
        userId: credentials.user.uid,
        nickname: data.name,
      });
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
    setError("");
  };

  return (
    <Wrapper>
      <XLogo />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} placeholder="Name" />
        <Input
          {...register("email")}
          placeholder="Email"
          type="text"
          inputMode="email"
        />
        <Input
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        <Switcher>
          이미 계정이 있으신가요? <Link to="/login">로그인하기 &rarr;</Link>
        </Switcher>
        {error !== "" ? <Error>{error}</Error> : null}
        <Button
          type="submit"
          value={isLoading ? "Loading..." : "Create Account"}
        />
      </Form>
      <GoogleButton />
    </Wrapper>
  );
}
