import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  
`

const LoginBox = styled.div`
  margin: 30vh 0;
`

export const InputBox = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  margin-top: 5vh;
`

export const InputTitle = styled.div`
  font-size: 18px;
  padding-left: 160px;
  width: 200px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`

export const InputValue = styled.input`
  border: none;
  box-shadow: -2px -2px 4px #f8f8f8, 3px 3px 6px rgb(184, 184, 184);
  border-radius: 13px;
  font-size: 17px;
  height: 40px;
  width: 230px;
  padding: 5px;
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.div`
  &:hover {
    background: #789278;
  }
  box-shadow: 3px 3px 6px rgb(184, 184, 184);
  border: none;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  background: #708870;
  width: 100px;
  height: 50px;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
  color: white;
`;

interface Iprops {
  LoginHandler: () => void;
}

export const Login = ({LoginHandler}: Iprops) => {

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const UserIdHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const PasswordHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <LoginContainer>
      <div style={{height:"5vh"}}>a</div>
      <LoginBox>
        <InputBox>
          <InputTitle>아이디 :</InputTitle>
          <InputValue type="text" value={userId} onChange={UserIdHandler}/>
        </InputBox>
        <InputBox>
          <InputTitle>비밀번호 :</InputTitle>
          <InputValue type="password" value={password} onChange={PasswordHandler}/>
        </InputBox>
        <ButtonBox>
          <Link to="/signup">
            <StyledButton onClick={LoginHandler}>회원가입</StyledButton>
          </Link>
          <StyledButton onClick={LoginHandler}>로그인</StyledButton>
        </ButtonBox>
      </LoginBox>
    </LoginContainer>
  )
}