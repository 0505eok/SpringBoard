import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  line-height: 50px;
  text-align: center;
  background: red;
`

export const Header = () => {
  return (
    <HeaderContainer>
      Header
    </HeaderContainer>
  )
}