import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Container from "../layout/container"
import { css } from "@emotion/react"
import {
  SiTypescript,
  SiRails,
  SiNextDotJs,
  SiCss3,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiGraphql,
  SiNodeDotJs,
} from "react-icons/si"
import { DiRuby } from "react-icons/di"
import transitionIn from "../animations/transition_in"
import "@fontsource/raleway/500.css"
import sizes from "../layout/sizes"
import SectionHeader from "./shared/section_header"

const StyledAbout = styled.div`
  font-family: "Raleway";
  display: flex;
  flex-direction: column;
`

const AboutMeDetails = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  float: left;
  text-align: left;
  ${"" /* margin-right: 3rem; */}
  line-height: 1.6;
  color: #e6e6e6;
  align-items: start;

  .leanpub {
    color: #69ebff;
    font-weight: 600;
    text-decoration: none;
  }

  .ruboss {
    text-decoration: none;
    font-weight: 600;
    color: #69ebff;
  }

  .interest {
    color: yellow;
  }
  @media (max-width: ${sizes.small}) {
    margin-right: 0;
  }
  @media (max-width: ${sizes.mobile}) {
    font-size: 1rem;
    margin: 0 1.5rem;
  }
`

const TechnologiesWrapper = styled.div`
  margin: 1.6rem 0;
  display: flex;
  vertical-align: center;
  flex-wrap: wrap;
`

const IconWrapper = styled.div({
  fontSize: "2.5rem",
  marginRight: "1.6rem",
  transition: "0.2s",

  "@media (min-width: 900px)": {
    ":hover": {
      fontSize: "3.6rem",
    },
  },
})

const Tech = props => {
  let icon
  switch (props.icon) {
    case "react":
      icon = <SiReact color="#00D9FF" />
      break
    case "js":
      icon = <SiJavascript color="#F7E018" />
      break
    case "ts":
      icon = <SiTypescript color="#007ACC" />
      break
    case "ruby":
      icon = <DiRuby color="#D91404" />
      break
    case "rails":
      icon = <SiRails color="#CB0101" />
      break
    case "next":
      icon = <SiNextDotJs color="#fff" />
      break
    case "html":
      icon = <SiHtml5 color="#DE4B25" />
      break
    case "css":
      icon = <SiCss3 color="#006DB4" />
      break
    case "graphql":
      icon = <SiGraphql color="#DF34A6" />
      break
    case "nodejs":
      icon = <SiNodeDotJs color="#539E43" />
      break
    default:
      break
  }

  return <IconWrapper>{icon}</IconWrapper>
}

export const About = ({ innerRef, visible }) => {
  // const hiddenRef = useRef()

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
      minHeight="70vh"
      ref={innerRef}
      css={animationStyle}
      id="about"
    >
      <SectionHeader>About me</SectionHeader>
      <StyledAbout>
        <Container size="small">
          <AboutMeDetails>
            <div>
              Hi, I'm Umutjan. I'm a computer science student & aspiring
              software developer based in Victoria, BC, Canada.
              {/* <br />
            <br />
            <span
              css={css`
                font-weight: 600;
              `}
            >
              I am ambitious, focused, and self-motivated
            </span>
            . */}
              <br />
              <br />I am a lifelong learner with a burning passion for solving
              problems through the use of technology. I am passionate about all
              things related to software development, with a special interest in{" "}
              <span className="interest">
                <strong>mobile and web applications development</strong>
              </span>
              , but I'm always open to new experiences with different subfields
              of software development.
              <br />
              <br />
              Currently, I am a Ruby Developer intern at{" "}
              <a className="ruboss" href="https://fullscript.com/">
                Fullscript
              </a>
              , a free online supplement dispensary & patient adherence tool. As
              an intern ruby developer, I get to solve a variety of interesting
              problems on a daily basis which constantly challenges me to
              improve my skills as a developer.
              <br />
              <br />
              Some technologies that I've recently been working with are:
              <br />
              <TechnologiesWrapper>
                <Tech icon="react" />
                <Tech icon="js" />
                <Tech icon="ts" />
                <Tech icon="ruby" />
                <Tech icon="rails" />
                <Tech icon="next" />
                <Tech icon="html" />
                <Tech icon="css" />
                <Tech icon="graphql" />
                <Tech icon="nodejs" />
              </TechnologiesWrapper>
            </div>
          </AboutMeDetails>
        </Container>
      </StyledAbout>
    </Container>
  )
}
