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
} from "react-icons/si"
import { DiRuby } from "react-icons/di"
import shake from "../animations/shake"
import enlarge from "../animations/enlarge"
import transitionIn from "../animations/transition_in"
import "@fontsource/raleway/500.css"
import sizes from "../layout/sizes"

const StyledAbout = styled.div`
  font-family: "Raleway";
  display: flex;
  flex-direction: column;
`

const AboutMe = styled.h1`
  font-family: "Yusei Magic", sans-serif;
  color: aliceblue;
  font-size: calc(1vw + 2vh + 2vmin);
  text-align: left;
  margin: 0 auto 2rem;
`

const AboutMeDetails = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  float: left;
  text-align: left;
  margin-right: 3rem;
  line-height: 1.6;
  color: #e6e6e6;
  align-items: start;

  .leanpub {
    color: rgb(240, 248, 255);
    font-weight: 600;
    text-decoration: none;
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
  fontSize: "2.6rem",
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
      icon = (
        <SiReact
          color="#00D9FF"
          // onMouseEnter={e => {
          //   e.target.style.color = "#00D9FF"
          // }}
          // // onMouseLeave={e => {
          // //   e.target.style.color = "#C2C2C2"
          // // }}
        />
      )
      break
    case "js":
      icon = (
        <SiJavascript
          color="#F7E018"
          // onMouseEnter={e => {
          //   e.target.style.color = "#F7E018"
          // }}
          // onMouseLeave={e => {
          //   e.target.style.color = "#C2C2C2"
          // }}
        />
      )
      break
    case "ts":
      icon = (
        <SiTypescript
          color="#007ACC"
          // color="#007ACC"
          // onMouseEnter={e => {
          //   e.target.style.color = "#007ACC"
          // }}
        />
      )
      break
    case "ruby":
      icon = (
        <DiRuby
          color="#D91404"
          // color="#D91404"
          // onMouseEnter={e => {
          //   e.target.style.color = "#D91404"
          // }}
        />
      )
      break
    case "rails":
      icon = (
        <SiRails
          color="#CB0101"
          onMouseEnter={e => {
            e.target.style.color = "#CB0101"
          }}
          // onMouseLeave={e => {
          //   e.target.style.color = "#C2C2C2"
          // }}
        />
      )
      break
    case "next":
      icon = (
        <SiNextDotJs
          color="#fff"
          // color="#fff"
          // onMouseEnter={e => {
          //   e.target.style.color = "#fff"
          // }}
        />
      )
      break
    case "html":
      icon = (
        <SiHtml5
          color="#DE4B25"
          // onMouseEnter={e => {
          //   e.target.style.color = "#DE4B25"
          // }}
        />
      )
      break
    case "css":
      icon = (
        <SiCss3
          color="#006DB4"
          // color="#006DB4"
          // onMouseEnter={e => {
          //   e.target.style.color = "#006DB4"
          // }}
        />
      )
      break
    case "graphql":
      icon = (
        <SiGraphql
          color="#DF34A6"
          // color="#DF34A6"
          // onMouseEnter={e => {
          //   e.target.style.color = "#DF34A6"
          // }}
        />
      )
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
      <AboutMe>About me</AboutMe>
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
              <a className="leanpub" href="https://leanpub.com/">
                Leanpub
              </a>
              , where I get to solve a variety of interesting problems on a
              daily basis.
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
