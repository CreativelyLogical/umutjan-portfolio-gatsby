import { keyframes } from "@emotion/react"

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

export default transitionIn
