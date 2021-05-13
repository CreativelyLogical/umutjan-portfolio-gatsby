import styled from "@emotion/styled"
import sizes from "./sizes"

const Container = styled.div(props => {
  const { size, backgroundColor, minHeight } = props

  return {
    maxWidth: sizes[size] ? sizes[size] : size,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: backgroundColor ? backgroundColor : "transparent",
    minHeight: minHeight,
    width: "100%",
    zIndex: 0,
  }
})

export default Container
