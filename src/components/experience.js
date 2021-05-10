import React, { useEffect, useState } from "react"
import Container from "../layout/container"
import { css } from "@emotion/react"
import { Job } from "./job"
import transitionIn from "../animations/transition_in"
import sizes from "../layout/sizes"

const leanpub = {
  title: "Full Stack Developer Co-op",
  details: {
    companyName: "Leanpub",
    duration: "Jan 2021 - Present",
    type: "Internship",
  },
  description:
    "Working mainly on the styling Leanpub storefront pages and incorporating GraphQL into the API",
  techUsed: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Emotion",
    "GraphQL",
    "Yarn",
  ],
  companyWebsite: "https://leanpub.com/",
}

const okhelp = {
  title: "Software Developer Co-op",
  details: {
    companyName: "Ok Help",
    duration: "Sept 2020 - Dec 2020",
    type: "Internship",
  },
  description: `Worked on the MVP of the OK Help application. 
  Duties were primarily in the backend, expanding and testing the API. 
  Increased the test coverage of the app to over 85% and implemented NestJS interceptors that worked alongside caching
  to reduce the number of calls to the database`,
  techUsed: [
    "TypeScript",
    "Node.js",
    "NestJS",
    "GraphQL",
    "PostgreSQL",
    "Azure",
  ],
  companyWebsite: "https://www.okhelp.org/login",
}
export const Experience = ({ innerRef, visible }) => {
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
      id="experience"
    >
      <h1
        css={css`
          color: aliceblue;
          font-size: calc(1vw + 2vh + 2vmin);
          font-weight: 700;
          text-align: left;
          margin: 0 auto 2rem;
          margin-top: 2rem;
        `}
      >
        Industry Experience
      </h1>
      <Job
        title={leanpub["title"]}
        details={leanpub["details"]}
        techUsed={leanpub["techUsed"]}
        description={leanpub["description"]}
        companyWebsite={leanpub["companyWebsite"]}
      />
      <Job
        title={okhelp["title"]}
        details={okhelp["details"]}
        techUsed={okhelp["techUsed"]}
        description={okhelp["description"]}
        companyWebsite={okhelp["companyWebsite"]}
      />
    </Container>
  )
}
