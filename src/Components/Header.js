import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 95px;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

const Header = () => {
  // 992 까지 메뉴 높이 95
  // 991 ~ 801 까지 60
  // 800 ~ 576
  // 그 밑으로 60
  return <Wrapper>Header</Wrapper>;
};

export default Header;
