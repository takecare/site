import React from "react"

import styles from "./styles.module.css"

// TODO add author in copyright via prop (which is queried)

const Footer = ({ children }) => (
  <footer>
    <span>{children}</span>
    <span className={styles.copy}>
      © {new Date().getFullYear()}, built with
      {` `}
      <a href="https://www.gatsbyjs.org">gatsby</a>
    </span>
  </footer>
)

export default Footer
