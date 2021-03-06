import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa"
import transitionIn from "../animations/transition_in"
import Container from "../layout/container"
import sizes from "../layout/sizes"
import SectionHeader from "./shared/section_header"

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

const SocialMediaIconsContainer = styled.div(() => {
  return {
    marginTop: "4rem",
    fontSize: "2rem",
    a: {
      margin: "0 0.75rem",
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
      <SectionHeader>Get In Touch</SectionHeader>
      <GetInTouchDetails>
        <Container size="small">
          <p>
            I'm currently looking for software development internships for
            Spring 2022. Think I might be a good fit on your team or just wanna
            chat? Feel free to send me an Email.
          </p>
          <SendEmailButton
            onClick={() => {
              window.location.href = "mailto:umutjan2010@gmail.com"
            }}
          >
            Send Email
          </SendEmailButton>
        </Container>
      </GetInTouchDetails>
      <SocialMediaIconsContainer>
        <a href="https://github.com/CreativelyLogical" target="_blank">
          <FaGithub color="white" />
        </a>
        <a href="https://www.linkedin.com/in/umutjanmahmut/" target="_blank">
          <FaLinkedin color="#fff" />
        </a>
        <a href="https://www.instagram.com/umutjan2010/" target="_blank">
          <FaInstagram color="white" />
        </a>
      </SocialMediaIconsContainer>
    </Container>
  )
}

export default ContactMe
