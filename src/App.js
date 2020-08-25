import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme.js";
import GlobalStyle from "./Styles/GlobalStyle";
import CustomHeight from "./Hooks/CustomWidthHeight";
import Header from "./Components/Header";
import Introduce from "./Components/Content/01_Intoruduce";
import AboutUs from "./Components/Content/02_AboutUs";
import WeBelieve from "./Components/Content/03_WeBelieve";
import WhatWedoOne from "./Components/Content/04_WhatWedo";
import WhatWedoSecond from "./Components/Content/05_WahtWedo";
import TestMonials from "./Components/Content/06_TestMonials";
import HowWeAreDifferent from "./Components/Content/07_HowWeAreDifferent";
import StartOptimizing from "./Components/Content/08_StartOptimizing";

const Wrapper = styled.div`
  display: flex;
  width: ${props => props.width}px;
  min-height: 1000px;
  height: ${props => props.height * 8}px;
  background-color: grey;
`;

// 화면단 높이 800

function App() {
  const { width, height } = CustomHeight();

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper width={width} height={height}>
        <GlobalStyle />
        <Header />
        <Introduce />
        <AboutUs />
        <WeBelieve />
        <WhatWedoOne />
        <WhatWedoSecond />
        <TestMonials />
        <HowWeAreDifferent />
        <StartOptimizing />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
