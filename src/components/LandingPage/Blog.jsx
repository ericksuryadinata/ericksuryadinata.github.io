import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import BlogItem from "components/Blog/BlogItem.jsx"

import blogStyle from "assets/jss/material-kit-react/pages/landingPage/blogStyle.jsx"

class Blog extends Component {
  render() {
    const { classes, data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Tulisan Terbaru</h2>
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
    )
  }
}

const BlogPage = withStyles(blogStyle)(Blog)

export default () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 3
        ) {
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
    `}
    render={data => <BlogPage data={data} />}
  />
)
