import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { FaGithub, FaExternalLinkAlt, FaGit } from "react-icons/fa"
import { Link } from "gatsby"

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
  flexShrink: 0,
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

const ProjectsAndLinksContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignContent: "space-between",
  width: "100%",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
  a: {
    color: "white",
  },
})

const Links = styled.div({
  display: "flex",
  maxHeight: 150,
  color: "white",
  textAlign: "right",
  flexShrink: 1,
  marginTop: "1.2rem",
  width: "100%",
  justifyContent: "flex-end",
  "*": {
    fontSize: "1.5rem",
    marginLeft: "0.5rem",
  },
  "@media (max-width: 768px)": {
    justifyContent: "flex-start",
    "*": {
      fontSize: "1.5rem",
      marginLeft: "0",
      marginRight: "1rem",
    },
  },
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

export const Project = props => {
  console.log("props is", props)

  return (
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
      <ProjectsAndLinksContainer>
        <ProjectTechContainer>
          {renderTechUsed(props.technologies)}
        </ProjectTechContainer>

        <Links>
          <a href={props.githubLink} target="_blank">
            <FaGithub />
          </a>
          <a href={props.appLink} target="_blank">
            <FaExternalLinkAlt />
          </a>
        </Links>
      </ProjectsAndLinksContainer>
    </ProjectContainer>
  )
}
