const meta = require('./meta.json')
const autoprefixer = require('autoprefixer')

module.exports = {
    siteMetadata: meta,
    plugins: [

          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-remark-mathjax`,
                
            // add plugin for video
                {
                  // Using gatsby-remark-embed-video before gatsby-remark-images & gatsby-remark-responsive-iframe plugins. 
                  // https://scotch.io/tutorials/embedding-videos-in-your-gatsbyjs-sites
                  //https://www.gatsbyjs.com/plugins/gatsby-remark-embed-video/?=video
                  resolve: `gatsby-remark-embed-video`,            
                  options: {
                    maxWidth: 800,
                    ratio: 1.77,
                    height: 400,
                    related: false,
                    noIframerder: true,
                  },
                },
                
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 790,
                        linkImagesToOriginal: true,
                        sizeByPixelDensity: false,
                        showCaptions: true,
                        quality: 80,
                        withWebp: { quality: 80 },
                    },
                  },
                  {
                        resolve: `gatsby-remark-katex`,
                        options: {
                          strict: `ignore`
                        }
                  },
                  
                  
                  
                  {
                        resolve: `gatsby-remark-mathjax`,
                        options: {
                          strict: `ignore`
                        }
                  }
              ],
            },
          },
          
                {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-copy-linked-files`,
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            noInlineHighlight: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-smartypants`,
                        options: {
                            dashes: 'oldschool',
                        },
                    },
                 
                    `gatsby-remark-unwrap-images`,
                ],
            },
        },  
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                indentedSyntax: true,
                postCssPlugins: [autoprefixer()],
                cssLoaderOptions: {
                    localIdentName:
                        process.env.NODE_ENV == 'development'
                            ? '[name]-[local]-[hash:8]'
                            : '[hash:8]',
                },
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `chapters`,
                path: `${__dirname}/chapters`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `slides`,
                path: `${__dirname}/slides`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `exercises`,
                path: `${__dirname}/exercises`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /static/,
                },
            },
        },

        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: meta.title,
                short_name: meta.title,
                start_url: `/`,
                background_color: meta.theme,
                theme_color: meta.theme,
                display: `minimal-ui`,
                icon: `static/icon.png`,
            },
        },
        `gatsby-plugin-offline`,
    ],
}