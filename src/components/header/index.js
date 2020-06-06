import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.module.css"

const Header = ({ title }) => (
  <header className={styles.header}>
    <div>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
