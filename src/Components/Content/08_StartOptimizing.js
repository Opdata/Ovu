import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: #c8d5b9;
`;

const StartOptimizing = ({ width, height }) => {
  return (
    <>
      <Wrapper className={"area"} width={width} height={height}>
        스타트옵티마이징
      </Wrapper>
    </>
  );
};

export default StartOptimizing;
