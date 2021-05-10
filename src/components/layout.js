/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import Aos from "aos"
import "aos/dist/aos.css"
import "./layout.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Hero } from "./hero"
import { About } from "./about"
import { Projects } from "./projects"
import styled from "@emotion/styled"
import { heroBackground } from "../layout/colors"
import { Experience } from "./experience"
import ContactMe from "./contact"
import useIntersection from "../hooks/useIntersection"
import sizes from "../layout/sizes"

const StyledLayout = styled.div`
  background: ${heroBackground};
  padding: 0 3rem;

  @media (max-width: ${sizes.small}) {
    padding: 1.5rem;
  }
  @media (max-width: ${sizes.mobile}) {
    padding: 0;
  }
`

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

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [aboutRef, aboutVisible] = useOnScreen({ threshold: "0.3" })
  const [expRef, expVisible] = useOnScreen({ threshold: "0.3" })
  const [projectsRef, projectsVisible] = useOnScreen({ threshold: "0.3" })
  const [contactRef, contactVisible] = useOnScreen({ threshold: "0.6" })

  // const hiddenRef = useRef()
  // let inViewPort = null
  // inViewPort = useIntersection(hiddenRef, "-200px")
  // useEffect(() => {}, [])
  // if (inViewPort) {
  //   console.log("in viewport:", hiddenRef.current)
  // }
  // // const hiddenRef = useRef()

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler)

  //   return () => window.removeEventListener("scroll", scrollHandler)
  // }, [])

  // const scrollHandler = () => {
  //   if (window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop)
  //     console.log(`Hidden element is now visible`)
  // }

  return (
    <StyledLayout>
      <Hero />
      <About innerRef={aboutRef} visible={aboutVisible} />
      <Experience innerRef={expRef} visible={expVisible} />

      <Projects innerRef={projectsRef} visible={projectsVisible} />
      <ContactMe innerRef={contactRef} visible={contactVisible} />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
