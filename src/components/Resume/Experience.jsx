import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Experience extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <section className={classes.detailX}>
        <h1 className={classes.sectionHeader}>Experience</h1>
        {data &&
          data.map((item, i) => (
            <article className={classes.my5} key={`${item.company}-${i}`}>
              <h2 className={classes.itemHeader}>{item.role}</h2>
              <h3 className={classes.itemSub}>
                {item.company} | {item.start} - {item.end || "PRESENT"}
              </h3>
              <p className={classNames(classes.xStory, classes.py6)}>
                {item.description}
              </p>
            </article>
          ))}
      </section>
    )
  }
}

export default withStyles(resumeStyle)(Experience)
