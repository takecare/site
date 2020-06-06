import React from "react"

import Layout from "../components/layout"
import Random from "../components/random"
import Dropdown from "../components/dropdown"

const IndexPage = data => {
  return (
    <Layout>
      <p>
        hi, i'm rui.{" "}
        <Random
          phrases={[
            "i'm not particularly fond of capital letters",
            "i love bread",
          ]}
        />
        . i'm a software engineer by trade and at heart, with a focus on{" "}
        <Dropdown
          options={["people", "quality", "mobile apps", "remote work", "ux"]}
        />
        . i enjoy doing many other things, though! if you see me around, chances
        are i might be{" "}
        <Dropdown
          options={[
            "cycling around",
            "baking a nice loaf of bread",
            "trying to code a game",
            "reading some quality sci-fi",
            "walking somewhere",
            "eating",
            "looking for something to ferment",
          ]}
        />
        .
      </p>
    </Layout>
  )
}

export default IndexPage
