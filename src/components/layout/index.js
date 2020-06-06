import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Menu from "../menu"
import Header from "../header"
import Footer from "../footer"

import styles from "./styles.module.css"

const Layout = ({ children }) => {
  // https://www.gatsbyjs.org/docs/use-static-query/
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      <div>
        <main style={{}}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
