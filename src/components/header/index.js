import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./styles.module.css"

const Header = ({ title, description }) => (
  <header>
    <div>
      <h1 className={styles.subheader}>
        <Link to="/">{title}</Link>
      </h1>
      <h6>{description}</h6>
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
