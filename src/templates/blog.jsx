import React, { useCallback, useEffect } from "react"
import Clipboard from "clipboard"
import classNames from "classnames"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import withStyles from "@material-ui/core/styles/withStyles"
import { FaArrowLeft, FaRegClock, FaTag } from "react-icons/fa"
import Button from "components/Custom/Button.jsx"
import Layout from "components/Layout"
import SEO from "components/SEO"
import Parallax from "components/Parallax/Parallax.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import FloatingButton from "components/Custom/FloatingButton.jsx"
import Data from "data/blogBg.json"
import blogPageStyle from "assets/jss/material-kit-react/pages/blogPage/blogPageStyle.jsx"

function clearTooptip(e) {
  e.currentTarget.setAttribute('class', 'copy-button')
  e.currentTarget.removeAttribute('aria-label')
}

function showTooltip(elem, msg) {
  elem.setAttribute('class', 'copy-button tooltipped tooltipped-s')
  elem.setAttribute('aria-label', msg)
}

const Blog = ({ data, classes }) => {

  const createCopyButton = useCallback(() => {
    const codes = global.document.querySelectorAll('#post-contents .gatsby-highlight')

    codes.forEach((code) => {
      const button = document.createElement('button')
      button.setAttribute('class', 'copy-button')
      button.innerHTML = 'COPY'
      button.addEventListener('mouseleave', clearTooptip)

      code.appendChild(button)
    })

    const clipboard = new Clipboard('.copy-button', {
      target: ({ previousElementSibling }) => previousElementSibling,
    })

    clipboard.on('success', (e) => {
      e.clearSelection()
      showTooltip(e.trigger, 'Copied')
    })
  }, [])

  useEffect(() => {
    createCopyButton()
  })

  const { markdownData: post } = data
  const dataLength = Data.images.length
  const random = Math.floor(Math.random() * Math.floor(dataLength))
  const { siteData: site } = data
  const url = site.siteMetadata.url
  const image = url + Data.images[random].path
  const imageCredit = Data.images[random].credit

  return (
    <Layout>
      <SEO title="Blog" postData={data} />
      <Parallax small filter image={image}>
        <p className={classes.credit}>&copy; {imageCredit}</p>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer>
              <GridItem xs={12} sm={12}>
                <Img
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                  alt={post.frontmatter.title}
                  title={post.frontmatter.title}
                />
              </GridItem>
              <GridItem xs={12} sm={12}>
                <h1 className={classes.postTitle}>{post.frontmatter.title}</h1>
                <small className={classes.smallTitle}>
                  Dipublikasikan pada {post.frontmatter.date}
                </small>
                <br />
                <small className={classes.smallTitle}>
                  Waktu baca: <FaRegClock className={classes.iconSmall} />{" "}
                  {post.timeToRead} Menit
                </small>
                <br />
                <small className={classes.smallTitle}>
                  Tags:{" "}
                  {post.frontmatter.tags.length === 0 ? (
                    "-"
                  ) : (
                      <span>
                        <FaTag className={classes.iconSmall} />{" "}
                        {post.frontmatter.tags.map(tag => tag)}
                      </span>
                    )}
                </small>
              </GridItem>
              <GridItem xs={12} sm={12}>
                <div className={classes.description}>
                  <div id="post-contents" dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <FloatingButton>
        <Link to="/blog">
          <Button color="primary" size="sm">
            <FaArrowLeft className={classes.icons} /> Kembali
              </Button>
        </Link>
      </FloatingButton>
    </Layout>
  )
}

export default withStyles(blogPageStyle)(Blog)

export const query = graphql`
  query BlogDetail($id: String!) {
    markdownData : markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        templateKey
        path
        category
        tags
        date(formatString: "DD/MM/YYYY")
        summary
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
    }
    siteData : site {
      siteMetadata {
        url
      }
    }
  }
`
