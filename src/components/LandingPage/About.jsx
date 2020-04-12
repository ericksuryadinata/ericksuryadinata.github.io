import React, { Component } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import { FaFacebook, FaGitlab, FaGithub } from "react-icons/fa"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/Custom/Button.jsx"

import aboutStyle from "assets/jss/material-kit-react/pages/landingPage/aboutStyle.jsx"

class About extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img
                  src="./img/profile.jpeg"
                  alt="Erick Surya Dinata"
                  className={classNames(
                    classes.imgRaised,
                    classes.imgRoundedCircle,
                    classes.imgFluid
                  )}
                />
              </div>
              <div>
                <h3 className={classes.title}>Erick Surya Dinata</h3>
                <h6 className={classes.job}>Back-End Developer</h6>
                <Button
                  justIcon
                  link
                  className={classes.margin5}
                  href="https://www.google.com"
                  target="_blank"
                >
                  <FaFacebook />
                </Button>
                <Button
                  justIcon
                  link
                  className={classes.margin5}
                  href="https://www.google.com"
                  target="_blank"
                >
                  <FaGithub />
                </Button>
                <Button
                  justIcon
                  link
                  className={classes.margin5}
                  href="https://www.google.com"
                  target="_blank"
                >
                  <FaGitlab />
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classes.description}>
          <Link to="/resume">
            <Button color="primary" round>
              RESUME
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default withStyles(aboutStyle)(About)
