const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const chapterTemplate = path.resolve('src/templates/chapter.js')

function replacePath(pagePath) {
    return pagePath === `/` ? pagePath : pagePath.replace(/\/$/, ``)
}

const express= require('express');

/**
 * gatsby api hook that will run when the development server is started
 * adding this line will allow to extend the server development configuration.
 * For this special case it will allow the content inside the public folder that gatsby will generate to be served and accessible.
 * more on that here =>https://www.gatsbyjs.org/docs/node-apis/#onCreateDevServer
 * 
 */
exports.onCreateDevServer=({app})=>{
    app.use(express.static('public'))
}

async function onCreateNode({
    node,
    actions,
    getNode,
    loadNodeContent,
    createNodeId,
    createContentDigest,
}) {
    const { createNodeField, createNode, createParentChildLink } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'chapters', trailingSlash: false })
        createNodeField({ name: 'slug', node, value: slug })
    } else if (node.extension === 'r') {
        // Load the contents of the Python file and make it available via GraphQL
        // https://www.gatsbyjs.org/docs/creating-a-transformer-plugin/
        const content = await loadNodeContent(node)
        const contentDigest = createContentDigest(content)
        const id = createNodeId(`${node.id}-code`)
        const internal = { type: 'Code', contentDigest }
        const codeNode = {
            id,
            parent: node.id,
            children: [],
            code: content,
            name: node.name,
            internal,
        }
        createNode(codeNode)
        createParentChildLink({ parent: node, child: codeNode })
    }
}

exports.onCreateNode = onCreateNode

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            type
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        const posts = result.data.allMarkdownRemark.edges.filter(
            ({ node }) => node.frontmatter.type == 'chapter'
        )
        posts.forEach(({ node }) => {
            createPage({
                path: replacePath(node.fields.slug),
                component: chapterTemplate,
                context: { slug: node.fields.slug },
            })
        })
    })
}
