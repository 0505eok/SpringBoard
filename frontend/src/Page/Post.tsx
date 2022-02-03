import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

interface Ipost {
  id: number;
  name: string;
  title: string;
  content: string;
}

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7vh 15%;
`

const Post = () => {
  const location = useLocation().state as Ipost;
  const { name, title, content } = location;
  const navigate = useNavigate();

  const toUpdate = () => {
    navigate("/newpost", { state: location });
  };

  return (
    <PostContainer>
      <div>제목 : {title}</div>
      <div>작성자 : {name}</div>
      <div>내용 : {content}</div>
      <Btn onClick={toUpdate}>수정</Btn>
    </PostContainer>
  );
};

export default Post;

const Btn = styled.div`
  width: 50px;
  background-color: gray;
  text-align: center;
`;
