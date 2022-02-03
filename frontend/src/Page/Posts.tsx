/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

interface Imember {
  id: number;
  name: string;
}

interface Ipost {
  id: number;
  title: string;
  content: string;
  author: Imember;
}

const PostContainer = styled.div`
  flex: 1;
  padding: 0 20%;
  overflow-y: scroll;
`;

const Posts = () => {
  const [postList, setPostList] = useState<Ipost[]>([]);
  const [title, setTitle] = useState("");
  const [findTitle, setFindTitle] = useState("");
  const navigate = useNavigate();

  const getPostList = async () => {
    const flag = findTitle ? `/${findTitle}` : "";
    const url = "http://localhost:8080/posts".concat(flag);
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
    navigate("/newpost");
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
