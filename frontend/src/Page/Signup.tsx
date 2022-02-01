import React, { useState } from "react";
import styled from "styled-components";
import {
  InputBox,
  InputTitle,
  InputValue,
  ButtonBox,
  StyledButton
} from './Login'

const SignupContainer = styled.div`
  
`

const SignupBody = styled.div`
  margin: 15vh 0;
`

const Warning = styled.div`
  font-size: smaller;
  font-weight: bolder;
  color: red;
`

export const Signup = () => {

  const [userId, setUserId] = useState('')
  const [isUserId, setIsUserId] = useState(true)
  const [username, setUsername] = useState('')
  const [isName, setIsName] = useState(true)
  const [password, setPassword] = useState('')
  const [isPass, setIsPass] = useState(true)
  const [checkPass, setCheckpass] = useState('')
  const [isCheck, setIsCheck] = useState(true)

  const UserIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
    const CheckId = (name: string): boolean => {
      return (name.length <= 20 && name.length >= 8) || name.length === 0;
    };
    if (!CheckId(e.target.value)) {
      setIsUserId(false);
    } else {
      setIsUserId(true);
    }
  }

  const UsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    const CheckId = (name: string): boolean => {
      return (name.length <= 8 && name.length >= 2) || name.length === 0;
    };
    if (!CheckId(e.target.value)) {
      setIsName(false);
    } else {
      setIsName(true);
    }
  }

  const PasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    const CheckPass = (password: string): boolean => {
      return (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(
          password
        ) || password.length === 0
      );
    };
    if (!CheckPass(e.target.value)) {
      setIsPass(false);
    } else {
      setIsPass(true);
    }
  }

  const CheckPassHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckpass(e.target.value)
    if (password === e.target.value || password.length === 0) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  }

  return (
    <SignupContainer>
      <div style={{height: "5vh"}}>a</div>
      <SignupBody>
        <InputBox>
          <InputTitle>아이디 :</InputTitle>
          <div style={{width:"360px"}}>
            <InputValue type="text" value={userId} onChange={UserIdHandler}/>
            <Warning style={isUserId ? {display:"none"} : {}}>아이디는 8 ~ 20자 사이로 입력해주세요.</Warning>
          </div>
        </InputBox>
        <InputBox>
          <InputTitle>닉네임 :</InputTitle>
          <div style={{width:"360px"}}>
            <InputValue type="text" value={username} onChange={UsernameHandler}/>
            <Warning style={isName ? {display:"none"} : {}}>닉네임은 2 ~ 8자 사이로 입력해주세요.</Warning>
          </div>
        </InputBox>
        <InputBox>
          <InputTitle>비밀번호 :</InputTitle>
          <div style={{width:"360px"}}>
            <InputValue type="password" value={password} onChange={PasswordHandler}/>
            <Warning style={isPass ? {display:"none"} : {}}>비밀번호는 8 ~ 16자의 영어 대소문자, 숫자, 특수문자만 사용 가능합니다.</Warning>
          </div>
        </InputBox>
        <InputBox>
          <InputTitle>비밀번호 확인 :</InputTitle>
          <div style={{width:"360px"}}>
            <InputValue type="password" value={checkPass} onChange={CheckPassHandler}/>
            <Warning style={isCheck ? {display:"none"} : {}}>비밀번호가 일치하지 않습니다.</Warning>
          </div>
        </InputBox>
        <ButtonBox>
          <StyledButton>회원가입</StyledButton>
        </ButtonBox>
      </SignupBody>
    </SignupContainer>
  )
}