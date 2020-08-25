import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme.js";
import GlobalStyle from "./Styles/GlobalStyle";
import CustomHeight from "./Hooks/CustomWidthHeight";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Introduce from "./Components/Content/01_Intoruduce";
import AboutUs from "./Components/Content/02_AboutUs";
import WeBelieve from "./Components/Content/03_WeBelieve";
import WhatWedoOne from "./Components/Content/04_WhatWedo";
import WhatWedoSecond from "./Components/Content/05_WahtWedo";
import TestMonials from "./Components/Content/06_TestMonials";
import HowWeAreDifferent from "./Components/Content/07_HowWeAreDifferent";
import StartOptimizing from "./Components/Content/08_StartOptimizing";

const Wrapper = styled.div`
  width: ${props => props.width}px;
  min-height: 1000px;
  height: ${props => props.height * 8}px;
  /* background-color: grey; */
`;

// 화면단 높이 800
// 컨텐트 좌측공백은 똑같으니까 div로 설정하고 묶으면될듯
// 좌측 선하고 텍스트도 컴포넌트로 분리해서 prop 넘겨주면될듯
// 버튼도 따로 분리

function App() {
  const { width, height } = CustomHeight();
  const [open, setOpen] = useState(false);

  window.addEventListener("scroll", () => {
    console.log("감지");
    //감지하고 1초동안delay주고 컴포넌트 높이만큼 height를 더하면 될듯
  });

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper width={width} height={height}>
        <GlobalStyle />
        <Menu open={open} height={height} />
        <Header open={open} setOpen={setOpen} />
        <Introduce height={height} />
        <AboutUs height={height} />
        <WeBelieve height={height} />
        <WhatWedoOne height={height} />
        <WhatWedoSecond height={height} />
        <TestMonials height={height} />
        <HowWeAreDifferent height={height} />
        <StartOptimizing height={height} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
