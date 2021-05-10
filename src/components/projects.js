import React, { useEffect, useState } from "react"
import { Project } from "./project"
import Container from "../layout/container"
import { Global, css } from "@emotion/react"
import Hope from "../images/hope.png"
import Battlesnake from "../images/battlesnake.png"
import transitionIn from "../animations/transition_in"

import Raleway from "../fonts/Raleway-VariableFont_wght.ttf"
import sizes from "../layout/sizes"

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
}
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
      minHeight="50vh"
      ref={innerRef}
      css={animationStyle}
      id="projects"
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
        Projects
      </h1>
      <Project
        title="Hope: To-do List & Reminders"
        description={hopeTodoProject["description"]}
        logo={Hope}
        technologies={hopeTodoProject["techUsed"]}
        id={hopeTodoProject["id"]}
      />
      <Project
        title="Battlesnake"
        description={battlesnakeProject["description"]}
        logo={Battlesnake}
        technologies={battlesnakeProject["techUsed"]}
        id={battlesnakeProject["id"]}
      />
    </Container>
  )
}
