/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
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

const PostContainer = styled.div`
  flex: 1;
  padding: 0 20%;
  overflow-y: scroll;
`;

const Posts = () => {

  const userInfo = useSelector((state:RootState) => state.userInfo)
  const [postList, setPostList] = useState<Ipost[]>([
    {
      id: 1,
      title: "asd",
      author: { id: 1, name: "me" },
      content: "asdasdasd",
      auth: 1,
    },
  ]);
  const [title, setTitle] = useState("");
  const [findTitle, setFindTitle] = useState("");
  const navigate = useNavigate();

  const getPostList = async () => {
    const flag = findTitle ? `/${findTitle}` : "";
    const url = "http://13.124.246.173:8080/posts".concat(flag);
    const res = await fetch(url);
    const ret = await res.json();
    setPostList(ret);
  };

  useEffect(() => {
    getPostList();
  }, [findTitle]);

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const findByName = async () => {
    setFindTitle(title);
    setTitle("");
  };

  const findByPost = (post: Ipost) => {
    navigate("/post", { state: post });
  };

  const toUpdate = () => {
    if (userInfo.id !== 0) {
      navigate("/newpost");
    }
    else {
      alert('로그인 후 이용하실 수 있습니다.')
    }
  };

  return (
    <PostContainer>
      <BtnContainer>
        <SearchContainer>
          <input
            type={"text"}
            value={title}
            onChange={setName}
            style={{ flex: "1", background: "#FFF" }}
          ></input>
          <Btn onClick={findByName}> 검색</Btn>
        </SearchContainer>
        <Btn onClick={toUpdate}>글쓰기</Btn>
      </BtnContainer>
      <ul>
        {postList.map((post: Ipost) => {
          return (
            <li
              key={post.id}
              onClick={() => {
                findByPost(post);
              }}
            >
              <PostElem>
                <div style={{ display: "flex", alignItems: "center" }}>
                  제목: {post.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minWidth: "10vw",
                  }}
                >
                  작성자: {post.author.name}
                </div>
              </PostElem>
            </li>
          );
        })}
      </ul>
    </PostContainer>
  );
};

export default Posts;

const PostElem = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 300px; */
  min-height: 5vh;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;

  &:hover {
    background-color: gray;
    cursor: Pointer;
    > div {
      background: gray;
    }
  }
`;

const Btn = styled.div`
  width: 50px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 400px; */
  justify-content: space-between;
  margin: 20px 0;
  height: 5vh;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
