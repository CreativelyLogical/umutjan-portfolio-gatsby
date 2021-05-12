import React, { useEffect, useRef, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Experience } from "../components/experience"
import { Projects } from "../components/projects"
import ContactMe from "../components/contact"

const useOnScreen = options => {
  const ref = useRef()

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return [ref, visible]
}

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
