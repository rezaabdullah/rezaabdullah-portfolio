import * as React from "react"
import Header from "./Header"
import { GolbalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GolbalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout