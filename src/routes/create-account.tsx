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
  Title,
  Wrapper,
  Form,
} from "../components/auth-components";
import GoogleButton from "../components/google-btn";
import { addDoc, collection } from "firebase/firestore";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm<Inputs>({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setError("");
    if (
      isLoading ||
      data.name === "" ||
      data.email === "" ||
      data.password === ""
    )
      return;
    try {
      setIsLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(credentials.user);
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
  };

  return (
    <Wrapper>
      <Title>Join 𝕏</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name", { required: true })} placeholder="Name" />
        <Input
          {...register("email", {
            required: true,
          })}
          placeholder="Email"
          type="email"
        />
        <Input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Create Account"}
        />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        이미 계정이 있으신가요? <Link to="/login">로그인하기 &rarr;</Link>
      </Switcher>
      <GoogleButton />
    </Wrapper>
  );
}
