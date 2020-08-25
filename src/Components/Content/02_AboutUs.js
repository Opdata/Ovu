import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: #81b214;
`;

const AboutUs = ({ width, height }) => {
  return (
    <>
      <Wrapper className={"area"} width={width} height={height}>
        어바웃
      </Wrapper>
    </>
  );
};

export default AboutUs;
