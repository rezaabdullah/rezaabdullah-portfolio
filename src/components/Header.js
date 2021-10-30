import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {FaBars} from "react-icons/fa"
import { menuData } from "../data/MenuData"

const Header = () => {
  return (
    <Nav>
      <NavLogo to="/">A|R</NavLogo>
      <Hamburger></Hamburger>
      <NavMenu>
        {
          menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))
        }
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  background: #E0E0E0;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 16px calc((100vw - 1180px) / 2);
  z-index: 200;
  position: relative;
  border-bottom: #707070 1px solid;
`

const NavLogo = styled(Link)`
  background: #707070;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
`
const NavLink = styled(Link)`
  background: #707070;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 40px;
  cursor: pointer;
  text-transform: uppercase;
`
const Hamburger = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-60%, 50%);
    font-size: 48px;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  background: #E0E0E0;
  display: flex;
  align-items: center;
  // margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`