import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: #206a5d;
`;

const Introudce = ({ width, height }) => {
  return (
    <>
      <Wrapper className={"area"} width={width} height={height}>
        인트로
      </Wrapper>
    </>
  );
};

export default Introudce;
