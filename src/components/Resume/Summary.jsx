import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Summary extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <section
        className={classNames(classes.section, classes.border, classes.py5)}
      >
        <GridContainer alignItems="center">
          <GridItem
            xs={12}
            sm={12}
            md={2}
            align="center"
            className={classes.mb5}
          >
            <img
              src="./img/profile.jpeg"
              alt="Erick Surya Dinata"
              className={classNames(
                classes.imgRaised,
                classes.imgRoundedCircle,
                classes.imgFluid,
                classes.imgResponsive
              )}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={10}>
            <p className={classNames(classes.description)}>{data}</p>
          </GridItem>
        </GridContainer>
      </section>
    )
  }
}

export default withStyles(resumeStyle)(Summary)
