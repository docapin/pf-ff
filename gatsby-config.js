module.exports = {
  siteMetadata: {
    title: "Founding Food",
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