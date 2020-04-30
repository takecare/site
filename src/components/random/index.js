import React from "react"

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

// TODO onclick: change phrase

const Random = props => (
  <span>{props.phrases[randomInt(props.phrases.length)]}</span>
)

export default Random
