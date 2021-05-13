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

  ${"" /* filter: blur(5px); */}

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

const NavButtonsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  z-index: 100;
  margin: 0;
  @media (max-width: ${sizes.mobile}) {
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    height: 100vh;
    background: #06121f;
  }
`

const NavButton = styled.li`
  display: inherit;
  padding: 0.5rem 1.5rem;

  align-items: center;
  margin: 0;
  text-transform: uppercase;
  position: relative;
  a {
    text-decoration: none;
    color: white;
  }
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    background: #218eb2;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`

const Name = styled.div`
  display: inherit;
  color: white;
  padding: 0.5rem 1.5rem;
  align-items: center;
`

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <Name>Umutjan Mahmut</Name>
      <RightNavbar open={open} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </Nav>
  )
}

export default Navbar
