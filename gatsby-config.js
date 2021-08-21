module.exports = {
  siteMetadata: {
    title: "food finding",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          outputStyle: `expanded`
        }
      }
    },
    `gatsby-plugin-react-helmet`
  ],
};