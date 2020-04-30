import PropTypes from "prop-types"
import React from "react"

// import styles from "./styles.module.css"

const Dropdown = props => <span>{props.options[0]}</span>

Dropdown.propTypes = {
  options: PropTypes.array,
}

Dropdown.defaultProps = {
  options: [""],
}

export default Dropdown
