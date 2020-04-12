import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Layout from "components/Layout"
import SEO from "components/SEO"
import Parallax from "components/Parallax/Parallax.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import About from "components/LandingPage/About.jsx"
import Blog from "components/LandingPage/Blog.jsx"
import landingPageStyle from "assets/jss/material-kit-react/pages/landingPage/landingPageStyle.jsx"

const IndexPage = props => {
  const { classes } = props
  return (
    <Layout>
      <SEO title="Home" />
      <Parallax filter image="./img/landing-page.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Hai, Salam Kenal !</h1>
              <h4>
                Selamat datang di blog pribadi saya, yang berisikan catatan
                perjalanan belajar saya di dunia teknologi.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <About />
          <Blog />
        </div>
      </div>
    </Layout>
  )
}

export default withStyles(landingPageStyle)(IndexPage)
