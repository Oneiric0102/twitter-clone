import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import Timeline from "../components/timeline";

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  overflow-y: scroll;
  grid-template-rows: 16.125rem auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 2.5rem 0rem;
`;

export default function Home() {
  return (
    <Wrapper>
      <PostTweetForm />
      <Timeline />
    </Wrapper>
  );
}
