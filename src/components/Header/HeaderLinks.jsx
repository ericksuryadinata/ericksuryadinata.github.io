import React from "react"
import { Link } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          Beranda
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/resume" className={classes.navLink}>
          Resume
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/blog" className={classes.navLink}>
          Blog
        </Link>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
