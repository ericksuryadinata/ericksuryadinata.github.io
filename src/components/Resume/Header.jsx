import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Contact from "components/Resume/Contact.jsx"
import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Header extends Component {
  render() {
    const { classes, contacts, name, role } = this.props
    return (
      <section
        className={classNames(classes.section, classes.border, classes.pb2)}
      >
        <GridContainer alignItems="center">
          <GridItem xs={12} sm={12} md={9}>
            <h1 className={classes.title}>{name}</h1>
            <h4 className={classes.job}>{role}</h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={3} className={classes.contactContainer}>
            {contacts &&
              Object.keys(contacts).map(key => (
                <Contact key={key} field={key} value={contacts[key]} />
              ))}
          </GridItem>
        </GridContainer>
      </section>
    )
  }
}

export default withStyles(resumeStyle)(Header)
