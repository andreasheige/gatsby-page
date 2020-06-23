/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Andreas Heige",
    description: "It pays to belong...",
    author: "A. Heige",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        /**
         * Note: To embed expression within a string,  use template literals (` `).
        The __dirname is a method of NodeJS that returns the absolute path of the 
        currently running file. There are 2 underscores before the dirname.*/
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}
