import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import sizes from "./sizes"

const Container = styled.div(props => {
  const { size, backgroundColor, minHeight } = props

  // console.log(sizes[size])

  const transitionIn = keyframes`
    from {
      opacity: 0;
      transform: rotateX(-10deg);
    }

    to {
      opacity: 1;
      transform: rotateX(0);
    }
  `

  return {
    maxWidth: sizes[size] ? sizes[size] : size,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: backgroundColor ? backgroundColor : "transparent",
    minHeight: minHeight,
    width: "100%",
  }
})

export default Container
