import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: #8fc0a9;
`;

const HowWeAreDifferent = ({ width, height }) => {
  return (
    <>
      <Wrapper className={"area"} width={width} height={height}>
        하우위얼디프런트
      </Wrapper>
    </>
  );
};

export default HowWeAreDifferent;
