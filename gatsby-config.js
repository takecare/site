const siteMetadata = {
  title: "rui vaz teixeira",
  description: "a personal webpage",
  author: "@takecare",
}

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: { extensions: [".mdx", ".md"] },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: { pathToConfigModule: "src/utils/typography" },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: { path: "./src/data/" },
    },
  ],
}
