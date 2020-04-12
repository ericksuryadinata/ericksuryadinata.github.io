const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  templateKey
                  path
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
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(edge => {
          const id = edge.node.id
          createPage({
            path: edge.node.fields.slug,
            component: path.resolve(
              `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`
            ),
            context: {
              id,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}
