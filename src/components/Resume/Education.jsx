import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Education extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <section className={classes.mb5}>
        <h1 className={classNames(classes.sectionHeader, classes.mb5)}>
          Education
        </h1>
        {data &&
          data.map(item => (
            <div className={classes.my2} key={item.degree}>
              <h2 className={classes.itemHeader}>{item.degree}</h2>
              <h3 className={classes.itemSub}>{item.institution}</h3>
              <p className={classes.eduYear}>
                {item.start} - {item.end || "PRESENT"}
              </p>
            </div>
          ))}
      </section>
    )
  }
}

export default withStyles(resumeStyle)(Education)
