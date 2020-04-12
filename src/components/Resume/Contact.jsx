import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { MdLocationOn, MdPhoneIphone, MdLink, MdEmail } from "react-icons/md"
import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Contact extends Component {
  render() {
    const { classes, field, value } = this.props
    return (
      <span className={classes.contact}>
        {field === "phone" && (
          <>
            <MdPhoneIphone className={classes.svg} />{" "}
            <a className={classes.contactLink} href={`tel:${value}`}>
              {value}
            </a>
          </>
        )}
        {field === "email" && (
          <>
            <MdEmail className={classes.svg} />
            <a className={classes.contactLink} href={`mailto:${value}`}>
              {value}
            </a>
          </>
        )}
        {field === "website" && (
          <>
            <MdLink className={classes.svg} />{" "}
            <a
              className={classes.contactLink}
              href={`${value}`}
              rel="noopener noreferrer"
              target="_blank"
              title="website"
            >
              Personal Site
            </a>
          </>
        )}
        {field === "location" && (
          <>
            <MdLocationOn className={classes.svg} />{" "}
            <span className={classes.contactLink}>{value}</span>
          </>
        )}
      </span>
    )
  }
}

export default withStyles(resumeStyle)(Contact)
