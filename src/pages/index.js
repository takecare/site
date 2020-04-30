import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Random from "../components/random"
import Dropdown from "../components/dropdown"
import Image from "../components/image"
import SEO from "../components/seo"

// {data.site.siteMetadata.title}

const IndexPage = data => (
  <Layout>
    <SEO title="Home" />
    <p>
      hi, i'm rui.{" "}
      <Random
        phrases={[
          "i'm not particularly fond of capital letters",
          "i love bread",
        ]}
      />
      . other than that, i'm a software engineer by trade and at heart, with a
      focus on{" "}
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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">about</Link>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
