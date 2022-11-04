module.exports = {
  siteMetadata: {
    title: `陈科衡的博客`,
    subtitle: `陈科衡的gatsby博客`,
    description: `陈科衡的gatsby博客`,
    keywords: '',
    author: "kartjim",
    authorGithub: "https://github.com/can-dy-jack",
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
      __key: "pages"
    }]
};