import React from "react"
import Container from "../layout/container"
import { heroBackground } from "../layout/colors"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"
import transitionIn from "../animations/transition_in"
import sizes from "../layout/sizes"

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  flex-direction: column;
  font-family: "Raleway";
  color: #c2c2c2;
  width: 100%;

  p {
    text-align: center;
  }

  .intro {
    font-size: 1.6rem;
    opacity: 0;
    animation: ${transitionIn} 2s ease 1s forwards;
    @media (max-width: ${sizes.small}) {
      font-size: 1.3rem;
    }
  }

  .name {
    color: aliceblue;
    font-size: 4rem;
    animation-fill-mode: both;
    opacity: 0;
    animation: ${transitionIn} 3s ease 2s forwards;
    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }

  .occp {
    ${"" /* color: rgba(236, 236, 236, 0.562); */}
    font-size: 4rem;
    opacity: 0;
    animation: ${transitionIn} 2s ease 3.5s forwards;
    @media (max-width: ${sizes.small}) {
      font-size: 2rem;
    }
  }

  .details {
    display: none;
  }
`

const yellowText = styled.span(() => {
  return {
    color: "aliceblue",
  }
})

export const Hero = () => (
  <Container size="large" minHeight="100vh" id="hero">
    <StyledHero>
      <p className="intro">Hi, I am</p>
      <h1 className="name">Umutjan Mahemuti</h1>
      <h1 className="occp">I'm a software developer</h1>
      <p className="details">
        I'm a 4th year Computer Science student in University of Victoria
        <br />I am passionate about all things related to software development,
        with a special interest in{" "}
        <span
          css={css({
            color: "#14ecf3",
            fontWeight: 500,
          })}
        >
          mobile and web applications development
        </span>
        {/* in <span className="interest"> mobile</span> and <span className="interest">web</span> applications development */}
        <br />
        <span
          css={css`
            font-weight: 600;
          `}
        >
          I'm currently looking for summer 2021 internship opportunities
        </span>
        .
      </p>
    </StyledHero>
  </Container>
)
