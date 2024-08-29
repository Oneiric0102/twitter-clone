import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

/*
  파일명 : src/components/post-tweet-form.tsx
  용도 : home 페이지에서 트윗을 작성하는 폼
*/

//Form에 입력될 데이터 타입 정의
type Inputs = {
  tweet: string;
  image: FileList;
};

//트윗 입력 Form 스타일
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0 1rem;
`;

//트윗 내용 입력 TextArea 스타일
const TextArea = styled.textarea`
  border: 0.125rem solid transparent;
  padding: 1.5rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primaryText};
  background-color: ${(props) => props.theme.colors.secondary};
  resize: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryText};
  }
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

//사진 첨부 버튼 스타일
//파일첨부 input은 스타일링이 어려우므로 label을 사용
const AttachFileButton = styled.label`
  padding: 0.75rem 0;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  border-radius: 1.25rem;
  border: 0.125rem solid ${(props) => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border: 0.125rem solid ${(props) => props.theme.colors.primaryHover};
    color: ${(props) => props.theme.colors.primaryHover};
  }
  transition: all 0.1s ease-out;
`;

//파일첨부 input 보이지 않게 설정
const AttachFileInput = styled.input`
  display: none;
`;

//트윗 등록 버튼 스타일
const SubmitBtn = styled.input`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 0;
  border-radius: 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
  transition: all 0.1s ease-out;
`;

export default function PostTweetForm() {
  const [isLoading, setIsLoading] = useState(false); //트윗 업로드중이거나 서버 접속중인지 체크

  //트윗 작성 Form
  const { register, handleSubmit, watch, reset } = useForm<Inputs>({
    mode: "onSubmit",
    defaultValues: {
      tweet: "",
      image: undefined,
    },
  });
  const tweetImage = watch("image");

  //트윗 Form Submit 함수
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const user = auth.currentUser;
    if (!user || isLoading || data.tweet === "" || data.tweet.length > 180)
      return;
    try {
      setIsLoading(true);
      //firebase에 트윗 정보 업로드
      const doc = await addDoc(collection(db, "tweets"), {
        tweet: data.tweet,
        createdAt: Date.now(),
        username: user.displayName || "Anonymous",
        userId: user.uid,
      });
      //사진이 같이 업로드 됐다면 storage에 업로드
      if (data.image && data.image.length > 0) {
        const locationRef = ref(
          storage,
          `tweets/${user.uid}-${user.displayName}/${doc.id}`
        );
        const result = await uploadBytes(locationRef, data.image[0]);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, {
          //사진의 src를 트윗 정보에 추가
          photo: url,
        });
      }
      reset();
    } catch (e) {
      alert(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextArea
        {...register("tweet", {
          required: true,
        })}
        rows={5}
        maxLength={180}
        placeholder="무슨 일이 일어나고 있나요?"
      />
      <AttachFileButton htmlFor="file">
        {tweetImage ? "Photo added✅" : "Add photo"}
      </AttachFileButton>
      <AttachFileInput
        {...register("image", {
          required: false,
        })}
        type="file"
        id="file"
        accept="image/*"
      />
      <SubmitBtn
        type="submit"
        value={isLoading ? "Posting..." : "Post Tweet"}
      />
    </Form>
  );
}
