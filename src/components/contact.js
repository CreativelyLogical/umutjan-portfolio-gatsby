import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import transitionIn from "../animations/transition_in"
import Container from "../layout/container"

const GetInTouch = styled.h1(() => {
  return {
    fontFamily: "sans-serif",
    color: "aliceblue",
    fontSize: "3.5rem",
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
    fontSize: "1.4rem",
    lineHeight: 2,
    p: {
      marginBottom: "2.5rem",
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
    fontSize: "1.5rem",
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
  `)

  useEffect(() => {
    if (visible) {
      setAnimationStyle(css`
        opacity: 0;
        animation: ${transitionIn} 2s ease 100ms forwards;
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
