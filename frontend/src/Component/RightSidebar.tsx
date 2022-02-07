import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { loginHandler } from "../modules/login";
import login from "../modules/login";
import { NavLink } from "react-router-dom";
import { userInfoHandler } from "../modules/userInfo";

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
  cursor: pointer;
`;

export const RightSidebar = () => {

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const isLogin = useSelector((state:RootState) => state.login.isLogin)
  const userInfo = useSelector((state:RootState) => state.userInfo)
  const dispatch = useDispatch();

  const loginer = async() => {
    const res = await fetch("http://13.124.246.173:8080/members/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ name: userId, password }),
    });
    if (res.ok) {
      // window.location.href = '/'
      const data = await res.json()
      dispatch(userInfoHandler(data.id, data.name))
      dispatch(loginHandler());
      localStorage.setItem("isLogin", "true")
      localStorage.setItem("userId", `${data.id}`)
      localStorage.setItem("username", `${data.name}`)
    } else {
      alert("잘못된 아이디 혹은 비밀번호입니다.");
      setUserId("");
      setPassword('');
    }
  };

  const logoutHandler = () => {
    dispatch(loginHandler());
    localStorage.setItem("isLogin", "false")
    dispatch(userInfoHandler(0, 'none'))
  }

  const userIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <RightSidebarContainer>
      { !isLogin ? 
        <LoginContainer>
          <LoginBox>
            <InputId type="text" placeholder="아이디" value={userId} onChange={userIdHandler}/>
            <InputId type="password" placeholder="비밀번호" value={password} onChange={passwordHandler}/>
            <BtnBox>
              <Btn onClick={loginer}>로그인</Btn>
              <NavLink to="/signup">
                <Btn>회원가입</Btn>
              </NavLink>
            </BtnBox>
          </LoginBox>
        </LoginContainer>
        :
        <LoginContainer>
          <LoginBox>
            <div style={{background: "#FFF"}}>{userInfo.name} 님 환영합니다.</div>
            <BtnBox>
              <Btn onClick={logoutHandler}>로그아웃</Btn>
            </BtnBox>
          </LoginBox>
        </LoginContainer>
      }
      
    </RightSidebarContainer>
  )
}