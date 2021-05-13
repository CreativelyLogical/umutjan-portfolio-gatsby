const scrollComponentIntoView = componentId => {
  const yOffset = -65
  const element = document.getElementById(componentId)
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({ top: y, behavior: "smooth" })
}

export default scrollComponentIntoView
