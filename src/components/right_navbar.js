import React from "react"
import styled from "@emotion/styled"
import scrollComponentIntoView from "../utils/scroll_component_into_view"
import sizes from "../layout/sizes"
import BurgerMenu from "./burger"

const RightNavContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  z-index: 20;
  margin: 0;
  @media (max-width: ${sizes.mobile}) {
    width: 70%;
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    height: 100vh;
    background: #06121f;
    display: ${({ open }) => (open ? "block" : "none")};
    li {
      margin-bottom: 20px;
    }
  }
`

const RightNavButton = styled.li`
  display: inherit;
  padding: 0.5rem 1.5rem;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  margin: 0;
  @media (max-width: 768px) {
    top: 90px;
    text-align: center;
  }
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

const RightNavbar = ({ open }) => {
  console.log("open is", open)

  return (
    <>
      <RightNavContainer open={open}>
        <RightNavButton
          onClick={() => {
            scrollComponentIntoView("about")
          }}
          top={1}
        >
          <a>About</a>
        </RightNavButton>
        <RightNavButton
          onClick={() => {
            scrollComponentIntoView("experience")
          }}
          top={2}
        >
          <a>Experience</a>
        </RightNavButton>
        <RightNavButton
          onClick={() => {
            scrollComponentIntoView("projects")
          }}
          top={3}
        >
          <a>Projects</a>
        </RightNavButton>
        <RightNavButton
          onClick={() => {
            scrollComponentIntoView("contact")
          }}
          top={4}
        >
          <a>Contact</a>
        </RightNavButton>
      </RightNavContainer>
    </>
  )
}

export default RightNavbar
