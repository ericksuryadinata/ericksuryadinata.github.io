import React, { Component } from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Icon from "components/Resume/Icon.jsx"
import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Footer extends Component {
  render() {
    const { classes, social } = this.props
    return (
      <section className={classNames(classes.footer, classes.py5)}>
        <GridContainer alignItems="center">
          <GridItem
            align="center"
            xs={12}
            sm={12}>
            {social &&
              social.map(item => (
                <a
                  key={item.service}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.service}
                  className={classes.iconLink}
                >
                  <Icon type={item.service} />
                </a>
              ))}
          </GridItem>
        </GridContainer>
      </section>
    )
  }
}

export default withStyles(resumeStyle)(Footer)
