import React, { useState } from "react"
import styled from "@emotion/styled"
import sizes from "../layout/sizes"
import scrollComponentIntoView from "../utils/scroll_component_into_view"
import RightNavbar from "./right_navbar"
import BurgerMenu from "./burger"

const Nav = styled.nav`
  font-family: Raleway;
  letter-spacing: 0.15em;
  overflow: hidden;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  background: #0f2640;
  font-weight: 500;
  @media (max-width: ${sizes.small}) {
    box-shadow: 0px 10px 15px 2px #081524;
  }
`

const Name = styled.div`
  display: inherit;
  color: white;
  padding: 0.5rem 1.5rem;
  align-items: center;
  text-transform: uppercase;
`

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <Name>Umutjan</Name>
      <RightNavbar open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </Nav>
  )
}

export default Navbar
