import React, { SetStateAction } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  float: left;
  width: 15%;
  height: 93vh;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 7%; /* Stay at the top */
  left: 0;
  border: 1px solid #dbdbdb;
  /* position: fixed; */
`

const Menu = styled.div`
  width: 90%;
  height: 7vh;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #dbdbdb;
  border-radius: 5px;
`

interface Iprops {
  PostHandler: () => void;
  MemberHandler: () => void;
  isPost: boolean;
}

export const Sidebar = ({PostHandler, MemberHandler, isPost}: Iprops) => {

  return (
    <SidebarContainer>
      <Menu style={isPost ? {background: "gray", color: "white"} : {}} onClick={PostHandler}>게시글 보기</Menu>
      <Menu style={isPost ? {} : {background: "gray", color: "white"}} onClick={MemberHandler}>멤버 목록 보기</Menu>
    </SidebarContainer>
  )
}