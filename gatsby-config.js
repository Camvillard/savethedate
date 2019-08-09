require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `dix neuf octobre`,
    description: `toutes les informations about le magical mariage de cam & alex.`,
    author: `camille villard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-flow`,
    // sass styles
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dix neuf octobre`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-airtable`,
    //   options: {
    //     apiKey: `${process.env.GATSBY_AIRTABLE_API_KEY}`, // may instead specify via env, see below
    //     tables: [
    //       {
    //         baseId: `appvBah3imDtdNXOz`,
    //         tableName: `rsvp`,
    //         // tableView: `rsvp`, // optional
    //         // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
    //         // mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
    //         // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
    //       }
    //     ]
    //   }
    // },
    // allows use to use svg as components
    // import $Name from $relative_path
    // use it with <Name />
    {
       resolve: "gatsby-plugin-react-svg",
       options: {
         rule: {
           include: /images/
         }
       }
     },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
