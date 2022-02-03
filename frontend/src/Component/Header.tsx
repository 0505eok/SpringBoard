import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  /* text-align: center; */
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #dbdbdb;
`

export const Header = () => {
  return (
    <HeaderContainer className="white">
      Header
    </HeaderContainer>
  )
}