import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  right: 0;
  width: 510px;
  height: fit-content;
  flex-direction: column;
  transform: translateX(${props => (props.open === true ? "0%" : "100%")});
  transition: transform 0.3s ease-in-out;
  background-color: #faf3dd;
  z-index: 1;
`;

//메뉴 활성화되면 콘텐트부분이 스크롤이 안됨

const Menu = ({ open }) => {
  return (
    <>
      <Wrapper open={open}>메뉴</Wrapper>
    </>
  );
};

export default Menu;
