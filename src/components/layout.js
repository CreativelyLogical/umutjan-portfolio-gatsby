/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "aos/dist/aos.css"
import "./layout.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "@emotion/styled"
import { heroBackground } from "../layout/colors"
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

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
