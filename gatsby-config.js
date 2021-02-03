module.exports = {
  siteMetadata: {
    title: `MagnuM I Series`,
    description: ``,
    siteUrl: `https://magnum.com.ua`
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-123057198-4",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
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
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
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
        path: `${__dirname}/src/intl`,
        name: `intl`,
      },
    },
  ],
};
