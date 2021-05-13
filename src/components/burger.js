import React from "react"
import styled from "@emotion/styled"
import sizes from "../layout/sizes"

const StyledBurger = styled.div`
  position: fixed;
  align-items: end;
  top: 2rem;
  right: 2rem;
  z-index: 60;
  display: none;
  @media (max-width: ${sizes.small}) {
    display: block;
  }

  span {
    display: block;
    width: 40px;
    height: 2px;
    margin-bottom: 10px;
    position: relative;
    background: white;
    transform-origin: 20px;
  }

  span:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(405deg)" : "rotate(0)")};
    transition: 0.4s linear;
  }

  span:nth-child(2) {
    transform: ${({ open }) =>
      open ? "rotate(-405deg) translateY(-9px) translateX(8px)" : "rotate(0)"};
    transition: 0.4s linear;
  }

  span:nth-child(3) {
    transform: ${({ open }) => (open ? "translateX(-100px)" : "translateX(0)")};
    opacity: ${({ open }) => (open ? 0 : 1)};
    transition: 0.3s linear;
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
      open={open}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledBurger>
  )
}

export default BurgerMenu
