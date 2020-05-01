import React, { Component } from "react"
import { graphql } from "gatsby"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Layout from "components/Layout"
import SEO from "components/SEO"
import Parallax from "components/Parallax/Parallax.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import BlogItem from "components/Blog/BlogItem.jsx"
import blogPageStyle from "assets/jss/material-kit-react/pages/blogPage/blogPageStyle.jsx"

class Blog extends Component {
  render() {
    const { classes, data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Layout>
        <SEO title="Blog" />
        <Parallax small filter image="./img/blog-bg.webp">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.parallaxTitle}>Blog</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.section}>
              <h2 className={classes.title}>Semua Tulisan</h2>
              <GridContainer>
                {posts.length === 0 ? (
                  <GridItem xs={12} sm={12}>
                    Tidak Ada Tulisan Terbaru
                  </GridItem>
                ) : (
                  posts.map(({ node: post }) => (
                    <GridItem xs={12} sm={12} md={4}>
                      <BlogItem data={post} key={post.id} />
                    </GridItem>
                  ))
                )}
              </GridContainer>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withStyles(blogPageStyle)(Blog)

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            path
            category
            date(formatString: "DD/MM/YYYY")
            summary
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                  src
                }
              }
            }
          }
          timeToRead
          fields {
            slug
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`
