import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: #f1f1e8;
`;

const WhatWedo = ({ width, height }) => {
  return (
    <>
      <Wrapper className={"area"} width={width} height={height}>
        왓위두
      </Wrapper>
    </>
  );
};

export default WhatWedo;
