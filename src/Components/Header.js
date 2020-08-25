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

const MenuBox = styled.div`
  display: flex;
  width: 95px;
  height: 95px;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  z-index: 2;
`;

const Header = ({ open, setOpen }) => {
  // 992 까지 메뉴 높이 95
  // 991 ~ 801 까지 60
  // 800 ~ 576
  // 그 밑으로 60
  return (
    <Wrapper>
      Header
      <MenuBox
        onClick={() => {
          setOpen(!open);
        }}>
        메뉴버튼
      </MenuBox>
    </Wrapper>
  );
};

export default Header;
