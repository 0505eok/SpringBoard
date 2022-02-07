import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../modules"
import { userInfoHandler } from "../modules/userInfo"

interface Imember {
  id: number;
  name: string;
}

interface Ipost {
  id: number;
  title: string;
  content: string;
  auth: number;
  author: Imember;
}

const NewPost = () => {
  const location = useLocation().state as Ipost;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postId, setPostId] = useState(-1)
  const userInfo = useSelector((state:RootState) => state.userInfo)

  useEffect(() => {
    if (location !== null) {
      const { author, title, content, id } = location;
      setTitle(title);
      setContent(content);
      setPostId(id)
    }
  }, []);

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const PostNew = async() => {
    if (!location) {
      const res = await fetch("http://13.124.246.173:8080/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
        // TODO : redux userId(name)
        body: JSON.stringify({ title: title, content: content, author: userInfo.id }),
      });
      if (res.ok) {
        window.location.href = '/'
        alert('완료되었습니다.')
      } else {
        alert("err");
      }
    }
    else {
      const res = await fetch(`http://13.124.246.173:8080/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
        // TODO : redux userId(name)
        body: JSON.stringify({ title, content, author: userInfo.id }),
      });
      if (res.ok) {
        window.location.href = '/'
        alert('완료되었습니다.')
      } else {
        alert("err");
      }
    }
  }

  return (
    <div style={{ padding: "7% 15% 0 15%" }}>
      <div>
        제목
        <input type={"text"} value={title} onChange={changeTitle}></input>
      </div>
      <div>
        내용
        <textarea value={content} onChange={changeContent}></textarea>
      </div>
      <Btn
        onClick={PostNew}
      >
        저장
      </Btn>
    </div>
  );
};

export default NewPost;

const Btn = styled.div`
  width: 50px;
  background-color: gray;
  text-align: center;
`;
