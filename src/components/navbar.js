import React from "react"
import styled from "@emotion/styled"

const Nav = styled.nav`
  font-family: Raleway;
  letter-spacing: 0.15em;
  overflow: hidden;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  background: #0f2640;
  font-weight: 500;
`

const NavButtonsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
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

const scrollComponentIntoView = componentId => {
  const yOffset = -65
  const element = document.getElementById(componentId)
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({ top: y, behavior: "smooth" })
}

const Navbar = () => {
  return (
    <Nav>
      <Name>Umutjan Mahmut</Name>
      <NavButtonsContainer>
        <NavButton>
          <a
            onClick={() => {
              scrollComponentIntoView("about")
            }}
          >
            About
          </a>
        </NavButton>
        <NavButton
          onClick={() => {
            scrollComponentIntoView("experience")
          }}
        >
          <a>Experience</a>
        </NavButton>
        <NavButton
          onClick={() => {
            scrollComponentIntoView("projects")
          }}
        >
          <a>Projects</a>
        </NavButton>
        <NavButton
          onClick={() => {
            scrollComponentIntoView("contact")
          }}
        >
          <a>Contact</a>
        </NavButton>
      </NavButtonsContainer>
    </Nav>
  )
}

export default Navbar
