import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const ProjectContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "1rem",
  borderRadius: 15,
  // border: "2px solid #3ecaed",
  fontFamily: "Raleway",
  marginBottom: "1.6rem",
  maxWidth: "900px",
  width: "100%",
  background: "#15365c",
})

const ProjectInnerContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
})

const ProjectTitleDescription = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: "1.6rem",
  "@media (max-width: 640px)": {
    marginLeft: 0,
  },
})

const ProjectTitle = styled.h1({
  color: "#51c4d3",
})

const ProjectTechContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  marginTop: "1.2rem",
  div: {
    transition: "0.3s",
    ":hover": {
      background: "#3ECAED",
      color: "#15365C",
    },
  },
})

const ProjectDescription = styled.div({
  fontWeight: "500",
  color: "white",
  p: {
    marginBottom: 0,
  },
  li: {
    margin: "0 0",
  },
  lineHeight: 1.5,
})

const Links = styled.div({
  display: "flex",
  flexDirection: "row",
  maxHeight: 150,
})

const ProjectTech = props => {
  const { techUsed } = props

  return (
    <div
      css={css`
        border: 2px solid #3ecaed;
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: 0.15rem 0.3rem;
        border-radius: 10px;
        color: aliceblue;
        font-weight: 500;
      `}
    >
      {techUsed}
    </div>
  )
}

const renderTechUsed = technologies => {
  return technologies.map(tech => <ProjectTech techUsed={tech} />)
}

export const Project = props => (
  <ProjectContainer>
    <ProjectInnerContainer>
      <img
        src={props.logo}
        css={css({
          marginBottom: 0,
          width: "calc(4vw + 5vh + 2vmin)",
          height: "calc(4vw + 5vh + 2vmin)",
          "@media (max-width: 768px)": {
            margin: "0 auto",
            marginBottom: "1rem",
          },
        })}
      />
      <ProjectTitleDescription>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.description}</ProjectDescription>
      </ProjectTitleDescription>
    </ProjectInnerContainer>
    <ProjectTechContainer>
      {renderTechUsed(props.technologies)}
    </ProjectTechContainer>
    <Links></Links>
  </ProjectContainer>
)
