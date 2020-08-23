import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme.js";
import GlobalStyle from "./Styles/GlobalStyle";

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 2000px;
  background-color: grey;
  flex-direction: column;
  justify-content: flex-end;
`;

// 화면단 높이 800

// 992 까지 메뉴 높이 95
// 991 ~ 801 까지 60
// 800 ~ 576
// 그 밑으로 60
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyle />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
