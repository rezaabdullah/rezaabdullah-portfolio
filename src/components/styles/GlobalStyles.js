import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
// import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    // margin: 0;
    // padding: 0;
    box-sizing: border-box;
  }
`