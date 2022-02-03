import React from "react";
import styled from "styled-components";

const RightSidebarContainer = styled.div`
  min-width: 15%;
  float: right;
  height: 93vh;
  border-left: 1px solid black;
  /* position: fixed; */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 7%; /* Stay at the top */
  border: 1px solid #dbdbdb;
  left: 85%;
  display: flex;
  justify-content: center;
`

const LoginContainer = styled.div`
  width: 90%;
  border: 1px solid #dbdbdb;
  background: #FFF;
  height: 25vh;
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFF;
`

const InputId = styled.input`
  border-radius: 20px;
  min-height: 4vh;
  margin: 10px;
`

const BtnBox = styled.div`
  display: flex;
  margin: 10px;
`

const Btn = styled.div`
  width: 60px;
  height: 40px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  border-radius: 5px;
`;

export const RightSidebar = () => {
  return (
    <RightSidebarContainer>
      <LoginContainer>
        <LoginBox>
          <InputId type="text" placeholder="아이디"/>
          <InputId type="password" placeholder="비밀번호"/>
          <BtnBox>
            <Btn>로그인</Btn>
            <Btn>회원가입</Btn>
          </BtnBox>
        </LoginBox>
      </LoginContainer>
    </RightSidebarContainer>
  )
}