import React from "react"
import { useMdxData } from "../../hooks/useMdxData"
import Layout from "../../components/layout"

// TODO styles

// TODO extract to components
const BlogItem = ({ blog }) => {
  return (
    <>
      <h1>{blog.frontmatter.title}</h1>
      <p>{blog.frontmatter.date}</p>
      <p>{blog.excerpt}</p>
    </>
  )
}

const Blog = () => {
  const data = useMdxData()
  console.log(data)
  return (
    <Layout>
      {data.allMdx.nodes.map(node => (
        <BlogItem key={node.id} blog={node} />
      ))}
    </Layout>
  )
}

export default Blog
