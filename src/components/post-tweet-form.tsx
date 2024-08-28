import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

type Inputs = {
  tweet: string;
  image: FileList;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0 1rem;
`;
const TextArea = styled.textarea`
  border: 2px solid transparent;
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
const AttachFileButton = styled.label`
  padding: 0.75rem 0;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  border-radius: 1.25rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primaryHover};
    color: ${(props) => props.theme.colors.primaryHover};
  }
  transition: all 0.2s ease-out;
`;
const AttachFileInput = styled.input`
  display: none;
`;
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
  transition: all 0.2s ease-out;
`;

export default function PostTweetForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm<Inputs>({
    mode: "onSubmit",
    defaultValues: {
      tweet: "",
      image: undefined,
    },
  });
  const tweetImage = watch("image");

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const user = auth.currentUser;
    if (!user || isLoading || data.tweet === "" || data.tweet.length > 180)
      return;
    try {
      setIsLoading(true);
      const doc = await addDoc(collection(db, "tweets"), {
        tweet: data.tweet,
        createdAt: Date.now(),
        username: user.displayName || "Anonymous",
        userId: user.uid,
      });
      if (data.image && data.image.length > 0) {
        const locationRef = ref(
          storage,
          `tweets/${user.uid}-${user.displayName}/${doc.id}`
        );
        const result = await uploadBytes(locationRef, data.image[0]);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, {
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
