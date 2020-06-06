import { graphql, useStaticQuery } from "gatsby"

const useJsonData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        dataJson {
          doing
          focus
          phrases
        }
      }
    `
  )
  return data.dataJson
}

export { useJsonData }
