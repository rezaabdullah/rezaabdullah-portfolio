import * as React from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import Header from "./Header"
import Hero from "./Hero"

// import { Normalize } from 'styled-normalize'
// import { Reset } from "styled-reset"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Normalize /> */}
      <GlobalStyle />
      <Header />
      <Hero />
      <main>{children}</main>
    </>
  )
}

export default Layout