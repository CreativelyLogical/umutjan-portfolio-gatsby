import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import transitionIn from "../animations/transition_in"
import Container from "../layout/container"
import sizes from "../layout/sizes"

const GetInTouch = styled.h1(() => {
  return {
    fontFamily: "sans-serif",
    color: "aliceblue",
    fontSize: "calc(1vw + 2vh + 2vmin)",
    fontWeight: 700,
    textAlign: "left",
    margin: "3rem 0",
    marginTop: "3rem",
  }
})

const GetInTouchDetails = styled.div(() => {
  return {
    fontFamily: "Raleway",
    color: "white",

    lineHeight: 2,
    p: {
      marginBottom: "2.5rem",
      fontSize: "calc(0vw + 1vh + 1vmin)",
    },
  }
})

const SendEmailButton = styled.button(() => {
  return {
    color: "#28B6DE",
    border: "2px solid #28B6DE",
    borderRadius: 15,
    background: "transparent",
    padding: "0.5rem 3rem",
    fontSize: "calc(0vw + 1vh + 1vmin)",
    fontWeight: 400,
    transition: "0.2s",
    cursor: "pointer",
    ":hover": {
      background: "#28B6DE",
      color: "#0F2640",
    },
  }
})

const ContactMe = ({ innerRef, visible }) => {
  const [animationStyle, setAnimationStyle] = useState(css`
    opacity: 0;
    @media (max-width: ${sizes.mobile}) {
      padding: 0 1.5rem;
    }
  `)

  useEffect(() => {
    if (visible) {
      setAnimationStyle(css`
        opacity: 0;
        animation: ${transitionIn} 2s ease 100ms forwards;
        @media (max-width: ${sizes.mobile}) {
          padding: 0 1.5rem;
        }
      `)
    }
  }, [visible])

  return (
    <Container
      size="large"
      minHeight="60vh"
      ref={innerRef}
      css={animationStyle}
      id="contact"
    >
      <GetInTouch>Get In Touch</GetInTouch>
      <GetInTouchDetails>
        <Container size="small">
          <p>
            I'm currently looking for software development internships for Fall
            2021. Think I might be a good fit on your team or just wanna chat?
            Feel free to send me an Email.
          </p>
          <SendEmailButton
            onClick={() => {
              window.location.href = "mailto:umutjan2010@hotmail.com"
            }}
          >
            Send Email
          </SendEmailButton>
        </Container>
      </GetInTouchDetails>
    </Container>
  )
}

export default ContactMe
