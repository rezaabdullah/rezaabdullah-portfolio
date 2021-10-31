import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
// import { Normalize } from 'styled-normalize'
// import { Reset } from "styled-reset"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Normalize /> */}
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout