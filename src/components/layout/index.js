import React from "react"
import PropTypes from "prop-types"

import { useSiteMetadata } from "../../hooks/useSiteMetadata"

import Menu from "../menu"
import Header from "../header"
import Footer from "../footer"

import styles from "./styles.module.css"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div className={styles.layout}>
      <Header title={title} description={description} />
      <Menu />
      <div>
        <main style={{}}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
