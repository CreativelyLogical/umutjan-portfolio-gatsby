import React, { useEffect, useRef, useState } from "react"
import styled from "@emotion/styled"
import Container from "../layout/container"
import { heroBackground } from "../layout/colors"
import { css } from "@emotion/react"
import { FaReact, FaJs, FaTty } from "react-icons/fa"
import {
  SiTypescript,
  SiRuby,
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
import shake from "../animations/shake"
import enlarge from "../animations/enlarge"
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

  // const scrollHandler = () => {
  //   if (window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop)
  //     console.log(`Hidden element is now visible`)
  // }

  return (
    <Container
      size="large"
      minHeight="60vh"
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
              Currently, I am a Full Stack Developer intern at{" "}
              <a className="ruboss" href="http://ruboss.com/">
                Ruboss
              </a>
              , which owns and operates{" "}
              <a className="leanpub" href="https://leanpub.com/">
                Leanpub
              </a>
              , a online platform where authors can write and publish e-books
              and courses. As a full stack coop, I get to solve a variety of
              interesting problems on a daily basis which constantly challenges
              me to improve my skills as a developer.
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
              {/* <br />
            <br />
            My interests include, but are not limited to:
            <br />
            mobile app development, web development, API development.
            <br />
            <br />
            Some technologies I've been currently working with are:
            <br />
            <br />
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Nest.js</li>
            </ul>
            <ul>
              <li>GraphQL (Apollo)</li>
              <li>Node.js</li>
              <li>React</li>
            </ul> */}
            </div>
          </AboutMeDetails>
        </Container>

        {/* <button className="resume-btn">Resume</button> */}
        {/* <Button variant="outline-light" className="resume-btn">Resume</Button>{' '} */}
      </StyledAbout>
    </Container>
  )
}
