import React from "react"
import useMdxData from "../../hooks/useMdxData"
import Layout from "../../components/layout"
import { Link } from "gatsby"

// TODO styles

// TODO extract to components
// FIXME shouldn't be destructuring as props.blog
const BlogItem = ({ blog }) => {
  const slug = blog.fields.slug
  return (
    <>
      <h4>
        <Link to={slug}>{blog.frontmatter.title}</Link>
      </h4>
      {/* <p>{blog.frontmatter.date}</p>
      <p>{blog.excerpt}</p> */}
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
