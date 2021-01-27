/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `MagnuM I Series`,
    description: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`uk`, `ru`],
        defaultLanguage: `uk`,
        // option to redirect to `/uk` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/intl`,
        name: `intl`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MagnuM I Series`,
        short_name: `Magnum I`,
        start_url: `/`,
        background_color: `#0d0620`,
        theme_color: `#0d0620`,
        display: `fullscreen`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/ru/`, `/uk/`],
      },
    },
  ],
}
