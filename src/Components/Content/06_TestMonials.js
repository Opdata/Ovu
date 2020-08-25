import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: #68b0ab;
`;

const TestMonials = ({ width, height }) => {
  return (
    <>
      <Wrapper className={"area"} width={width} height={height}>
        테스트
      </Wrapper>
    </>
  );
};

export default TestMonials;
