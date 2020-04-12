import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import Button from "components/Custom/Button.jsx"
import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Project extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <section className={classes.detailX}>
        <h1 className={classes.sectionHeader}>Projects</h1>
        {data &&
          data.map(item => (
            <article className={classes.my5} key={item.name}>
              <h2 className={classes.itemHeader}>{item.name}</h2>
              <h3 className={classes.itemSub}>{item.company}</h3>
              <p className={classNames(classes.xStory, classes.py4)}>
                {item.description}
              </p>
              <Button
                color="warning"
                size="sm"
                className={classes.btnVisit}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                visit project
              </Button>
            </article>
          ))}
      </section>
    )
  }
}

export default withStyles(resumeStyle)(Project)
