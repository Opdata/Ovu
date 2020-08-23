import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
body{

    ::-webkit-scrollbar{
    display:none;
    }
}
${reset}
`;
