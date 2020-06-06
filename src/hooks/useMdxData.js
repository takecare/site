import { graphql, useStaticQuery } from "gatsby"

const useMdxData = () => {
  const result = useStaticQuery(
    graphql`
      query SITE_INDEX_QUERY {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    `
  )
  return result
}

export default useMdxData
