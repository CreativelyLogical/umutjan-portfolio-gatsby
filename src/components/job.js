import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import sizes from "../layout/sizes"

const JobContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  fontFamily: "Raleway",
  marginBottom: "2.6rem",
  maxWidth: sizes.medium,
  width: "100%",
  background: "#15365C",
  paddingTop: "0.75rem",
  paddingLeft: "1.5rem",
  borderRadius: 15,
})

const JobTitle = styled.h3({
  fontSize: "calc(0vw + 2vh + 2vmin)",
  color: "aliceblue",
  marginBottom: "0.2rem",
  fontWeight: 500,
  fontFamily: "Raleway",
  // "@media (max-width: 640px)": {
  //   fontSize: "2rem",
  // },
})

const JobDetails = styled.div({
  display: "flex",
  flexDirection: "row",

  alignItems: "baseline",

  "*": {
    marginRight: "1.6rem",
  },

  a: {
    textDecoration: "none",
  },
})

const Duration = styled.h2({
  fontSize: "calc(0vw + 2vh + 0vmin)",
  fontWeight: 400,
  color: "rgba(255, 247, 214, 0.9)",
})

const CompanyName = styled.h2({
  fontSize: "calc(0vw + 1vh + 2vmin)",
  fontWeight: 700,
  marginBottom: "0.2rem",
  fontFamily: "Raleway",
  color: "#28b6de",
  "@media (max-width: 640px)": {
    marginRight: 0,
  },
})

const JobTechContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  marginTop: "1.2rem",
  div: {
    transition: "0.1s",
    ":hover": {
      background: "#3ECAED",
      color: "#15365C",
    },
  },
})

const JobDescription = styled.div({
  maxWidth: "600px",
  widows: "100%",
  color: "white",
  "@media (max-width: 640px)": {
    fontSize: "1rem",
  },
})

const JobTech = props => {
  const { techUsed } = props

  return (
    <div
      css={css`
        border: 2px solid #3ecaed;
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: 0.15rem 0.3rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        &:hover: {
          background: white;
        }
        @media (max-width: ${sizes.mobile}) {
          font-size: 1rem;
        }
      `}
    >
      {techUsed}
    </div>
  )
}

const renderTechUsed = technologies => {
  return technologies.map(tech => <JobTech techUsed={tech} />)
}

export const Job = props => {
  return (
    <JobContainer>
      <JobTitle>{props.title}</JobTitle>
      <JobDetails>
        <a href={props.companyWebsite}>
          <CompanyName>{props.details.companyName}</CompanyName>
        </a>
        <Duration>{props.details.duration}</Duration>
      </JobDetails>
      <JobDescription>{props.description}</JobDescription>
      <JobTechContainer>{renderTechUsed(props.techUsed)}</JobTechContainer>
    </JobContainer>
  )
}
