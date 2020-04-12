/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, postData, isBlogPost }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
            social {
              twitter
              fbAppId
            }
          }
        }
      }
    `
  )

  const postMeta = postData.frontmatter || {}
  const metaDescription = site.siteMetadata.description || postMeta.title
  const metaTitle = title || postMeta.title
  const image = site.siteMetadata.image || postMeta.image
  const url = site.siteMetadata.url || `${site.siteMetadata.url}/${postMeta.path}${postMeta.slug}`
  const ogType = isBlogPost ? 'article' : 'website'
  const fbAppId = site.siteMetadata.social.fbAppId
  const twitter = site.siteMetadata.social.twitter

  return (
    <Helmet
      htmlAttributes={{
        lang: 'id',
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: "canonical",
          href: url
        }
      ]}
      meta={[
        // general
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        // open graph
        {
          property: `og:url`,
          content: url
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          property: `og:image`,
          content: image
        },
        {
          property: `fb:app_id`,
          content: fbAppId
        },

        // twitter card
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: twitter
        },
        {
          name: `twitter:creator`,
          content: twitter,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: image
        }
      ]}
    />
  )
}

SEO.defaultProps = {
  isBlogPost: false,
  postData: { frontmatter: {} },
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO
