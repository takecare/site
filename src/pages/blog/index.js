import React from "react"
import useMdxData from "../../hooks/useMdxData"
import Layout from "../../components/layout"
import { Link } from "gatsby"

// TODO styles

const Date = ({ date }) => {
  const parsedDate = new Date(frontmatter.date)
  const date = {
    year: parsedDate.getUTCFullYear(),
    month: parsedDate.getUTCMonth(),
    day: parsedDate.getUTCDay(),
  }
  return (
    <>
      <span></span>
    </>
  )
}

// TODO extract to components
// FIXME shouldn't be destructuring as props.blog
const BlogItem = ({ blog }) => {
  const slug = blog.fields.slug
  const frontmatter = blog.frontmatter

  console.log(date)
  return (
    <div>
      <span>
        {date.year}/{date.month}/{date.day}
      </span>
      &nbsp;
      <span>
        <Link to={slug}>{frontmatter.title}</Link>
      </span>
      {/* <p>{blog.frontmatter.date}</p>
      <p>{blog.excerpt}</p> */}
    </div>
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
