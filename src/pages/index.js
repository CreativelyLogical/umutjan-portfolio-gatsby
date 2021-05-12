import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Experience } from "../components/experience"
import { Projects } from "../components/projects"
import ContactMe from "../components/contact"
import useOnScreen from "../hooks/useOnScreen"

const IndexPage = () => {
  const [aboutRef, aboutVisible] = useOnScreen({ threshold: "0.3" })
  const [expRef, expVisible] = useOnScreen({ threshold: "0.3" })
  const [projectsRef, projectsVisible] = useOnScreen({ threshold: "0.3" })
  const [contactRef, contactVisible] = useOnScreen({ threshold: "0.6" })

  return (
    <Layout>
      <Hero />
      <About innerRef={aboutRef} visible={aboutVisible} />
      <Experience innerRef={expRef} visible={expVisible} />
      <Projects innerRef={projectsRef} visible={projectsVisible} />
      <ContactMe innerRef={contactRef} visible={contactVisible} />
    </Layout>
  )
}

export default IndexPage
