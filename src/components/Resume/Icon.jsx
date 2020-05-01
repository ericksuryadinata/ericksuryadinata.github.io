import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaAngellist,
  FaGitlab
} from "react-icons/fa"
import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Icon extends Component {
  render() {
    const { classes, type } = this.props
    switch (type) {
      case "linkedin":
        return <FaLinkedin size={32} className={classes.icon} />
      case "facebook":
        return <FaFacebook size={32} className={classes.icon} />
      case "twitter":
        return <FaTwitter size={32} className={classes.icon} />
      case "youtube":
        return <FaYoutube size={32} className={classes.icon} />
      case "instagram":
        return <FaInstagram size={32} className={classes.icon} />
      case "github":
        return <FaGithub size={32} className={classes.icon} />
      case "behance":
        return <FaBehance size={32} className={classes.icon} />
      case "dribbble":
        return <FaDribbble size={32} className={classes.icon} />
      case "angellist":
        return <FaAngellist size={32} className={classes.icon} />
      case "gitlab":
        return <FaGitlab size={32} className={classes.icon} />
      default:
        return null
    }
  }
}

export default withStyles(resumeStyle)(Icon)
