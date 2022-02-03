import React, { useState } from "react";
import styled from "styled-components";
import Posts from "./Posts";
import Members from "./Members";
import { Sidebar } from "../Component/Sidebar";
import { RightSidebar } from "../Component/RightSidebar";

const HomeContainer = styled.div`
  display: flex;
`

const Home = () => {

  const [isPost, setIsPost] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  const LoginHandler = () => {
    setIsLogin(!isLogin)
  }

  const PostHandler = () => {
    setIsPost(true)
  }

  const MemberHandler = () => {
    setIsPost(false)
  }

  return (
    <>
    <div style={{height: "7vh"}}></div>
    <HomeContainer>
      <Sidebar PostHandler={PostHandler} MemberHandler={MemberHandler} isPost={isPost}/>
      {isPost ? <Posts/> : <Members/>}
      <RightSidebar/>
    </HomeContainer>
    </>
  );
};

export default Home;
