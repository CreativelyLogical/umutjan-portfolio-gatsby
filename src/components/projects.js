import React, { useEffect, useState } from "react"
import { Project } from "./project"
import Container from "../layout/container"
import { Global, css } from "@emotion/react"
import Hope from "../images/hope.png"
import Battlesnake from "../images/battlesnake.png"
import transitionIn from "../animations/transition_in"

import Raleway from "../fonts/Raleway-VariableFont_wght.ttf"
import sizes from "../layout/sizes"
import SectionHeader from "./shared/section_header"
import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"
import styled from "@emotion/styled/"

const hopeTodoProject = {
  id: 1,
  title: "Hope: To-do List & Reminders",
  description: (
    <div>
      <p>A simple and comprehensive to-do list that allows users to:</p>
      <ul>
        <li>Set tasks by category and priority</li>
        <li>Plan for the week ahead</li>
        <li>Set and receive reminders of their tasks</li>
      </ul>
    </div>
  ),
  techUsed: [
    "Android studio",
    "Flutter",
    "Dart",
    "SQLite",
    "Xcode",
    "Adobe Illustrator",
  ],
  githubLink: "https://github.com/CreativelyLogical/todolist-app",
  appLink: "https://play.google.com/store/apps/details?id=com.umutjanmahmut.hope_todo",
}

const battlesnakeProject = {
  id: 2,
  title: "Battlesnake",
  description: (
    <div>
      <p>
        A competitive programmatic snake created by{" "}
        <strong>implementing the Battlesnake web API</strong>. In order for the
        snake to survive, it must:
      </p>
      <ul>
        <li>Avoid collisions with snakes</li>
        <li>Consume food randomly scattered across the game board</li>
        <li>Avoid collisions with itself and game board boundaries </li>
      </ul>
    </div>
  ),
  techUsed: ["JavaScript", "Node.js", "Express.js", "VS Code"],
  githubLink: "https://github.com/CreativelyLogical/Battlesnake",
  appLink: "https://play.battlesnake.com/u/creativelylogical/",
}

const SeeMoreProjectsButton = styled.a(() => {
  return {
    margin: "2rem 0 3rem",
    color: "#28B6DE",
    border: "2px solid #28B6DE",
    borderRadius: 15,
    background: "transparent",
    fontFamily: "Raleway",
    padding: "1rem 3rem",
    fontSize: "calc(0vw + 1vh + 1vmin)",
    fontWeight: 400,
    transition: "0.2s",
    cursor: "pointer",
    ":hover": {
      background: "#28B6DE",
      color: "#0F2640",
    },
    textDecoration: "none",
  }
})

export const Projects = ({ innerRef, visible }) => {
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
      minHeight="80vh"
      ref={innerRef}
      css={animationStyle}
      id="projects"
    >
      <SectionHeader>Projects</SectionHeader>
      <Project
        title="Hope: To-do List & Reminders"
        description={hopeTodoProject["description"]}
        logo={Hope}
        technologies={hopeTodoProject["techUsed"]}
        id={hopeTodoProject["id"]}
        githubLink={hopeTodoProject["githubLink"]}
        appLink={hopeTodoProject["appLink"]}
      />
      <Project
        title="Battlesnake"
        description={battlesnakeProject["description"]}
        logo={Battlesnake}
        technologies={battlesnakeProject["techUsed"]}
        id={battlesnakeProject["id"]}
        githubLink={battlesnakeProject["githubLink"]}
        appLink={battlesnakeProject["appLink"]}
      />
      <SeeMoreProjectsButton
        href="https://github.com/CreativelyLogical"
        target="_blank"
      >
        See More Projects
      </SeeMoreProjectsButton>
    </Container>
  )
}
