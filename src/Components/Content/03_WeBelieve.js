import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: #bfdcae;
`;

const WeBelieve = ({ width, height }) => {
  return (
    <>
      <Wrapper className={"area"} width={width} height={height}>
        위빌리브
      </Wrapper>
    </>
  );
};

export default WeBelieve;
