import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import {RootState} from '../modules'
import {userInfoHandler} from '../modules/userInfo'

interface Imember {
  id: number;
  name: string;
}

interface Ipost {
  id: number;
  author: Imember;
  title: string;
  auth: number;
  content: string;
}

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7vh 15%;
`;

const Post = () => {
  const location = useLocation().state as Ipost;
  const { author, title, content, id } = location;
  const navigate = useNavigate();

  const userInfo = useSelector((state:RootState) => state.userInfo)

  const toUpdate = () => {
    navigate("/newpost", { state: location });
  };

  return (
    <PostContainer>
      <div>아이디 : {id}</div>
      <div>제목 : {title}</div>
      <div>작성자 : {author.name}</div>
      <div>내용 : {content}</div>
      <Btn onClick={toUpdate} style={userInfo.id === author.id ? {} : {display:"none"}}>수정</Btn>
    </PostContainer>
  );
};

export default Post;

const Btn = styled.div`
  width: 50px;
  background-color: gray;
  text-align: center;
`;
