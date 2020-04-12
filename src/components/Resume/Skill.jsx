import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import Badge from "components/Badge/Badge.jsx"
import Progress from "components/Custom/Progress.jsx"
import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Skill extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <section>
        <h1 className={classes.sectionHeader}>Skills</h1>
        {data &&
          data.map(skill => (
            <div key={skill.title} className={classes.my5}>
              <h1
                className={classNames(
                  classes.itemHeaderSkill,
                  classes.section,
                  classes.border
                )}
              >
                {skill.title}
              </h1>
              {skill.subskills &&
                skill.subskills.map(subskill => (
                  <>
                    {skill.type === "percent" && (
                      <div
                        className={classNames(classes.progress, classes.mb2)}
                        key={subskill.name}
                      >
                        {subskill.name}
                        <Progress
                          variant="determinate"
                          color="primary"
                          value={subskill.percent}
                        />
                      </div>
                    )}
                    {skill.type === "tag" && (
                      <Badge color="warning" key={subskill.name}>
                        {subskill.name}
                      </Badge>
                    )}
                  </>
                ))}
            </div>
          ))}
      </section>
    )
  }
}

export default withStyles(resumeStyle)(Skill)
