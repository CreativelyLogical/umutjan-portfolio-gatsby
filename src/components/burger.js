import React from "react"
import styled from "@emotion/styled"

const StyledBurger = styled.div`
  position: fixed;
  align-items: end;
  top: 2rem;
  right: 2rem;
  z-index: 25;
  @media (min-width: 768px) {
    display: none;
  }

  span {
    display: block;
    width: 40px;
    height: 2px;
    margin-bottom: 10px;
    position: relative;
    background: white;
  }

  span:nth-child(3) {
    width: 30px;
    float: right;
  }
`

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <StyledBurger
      onClick={() => {
        setOpen(!open)
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledBurger>
  )
}

export default BurgerMenu
