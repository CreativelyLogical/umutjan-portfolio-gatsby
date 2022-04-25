import React, { useEffect, useState } from "react"
import Container from "../layout/container"
import { css } from "@emotion/react"
import { Job } from "./job"
import transitionIn from "../animations/transition_in"
import sizes from "../layout/sizes"
import SectionHeader from "./shared/section_header"

const borrowell = {
  title: "Mobile Developer Intern",
  details: {
    companyName: "Borrowell",
    duration: "Jan 2022 - April 2022",
    type: "Internship",
  },
  description: "Working with the mobile application team",
  techUsed: [
    "TypeScript",
    "React Native",
    "Redux",
    "RxJS",
    "Redux-observable",
    "GraphQL",
  ],
  companyWebsite: "https://borrowell.com/",
}

const fullscript = {
  title: "Intern Ruby Developer",
  details: {
    companyName: "Fullscript",
    duration: "Aug 2021 - Dec 2021",
    type: "Internship",
  },
  description: `Working mainly with Ruby on Rails with the team responsible for the patient
  adherence program. Also responsible for maintaining the app by fixing bugs and improving 
  performance`,
  techUsed: [
    "Ruby",
    "Ruby on Rails",
    "TypeScript",
    "GraphQL",
    "PostgreSQL",
    "mySQL",
  ],
  companyWebsite: "https://fullscript.com/",
}

const leanpub = {
  title: "Full Stack Developer Co-op",
  details: {
    companyName: "Ruboss",
    duration: "Jan 2021 - Aug 2021",
    type: "Internship",
  },
  description: `Working mainly on the styling Leanpub storefront pages and incorporating GraphQL into the API. 
  Overhauled image sizes used by Leanpub which lead to a 30% reduction in data loaded by the storefront page. Took
  on mentorship role for other coop students in the full stack team.
    `,
  techUsed: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Emotion",
    "GraphQL",
    "Yarn",
    "Ruby",
    "Ruby on Rails",
  ],
  companyWebsite: "http://ruboss.com/",
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
      minHeight="90vh"
      ref={innerRef}
      css={animationStyle}
      id="experience"
    >
      <SectionHeader>Industry Experience</SectionHeader>
      <Job job={borrowell} />
      <Job job={fullscript} />
      <Job job={leanpub} />
      <Job job={okhelp} />
    </Container>
  )
}
