import React from "react"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Zoom from "@material-ui/core/Zoom"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 99,
  },
}))

export default function ScrollTop(props) {
  const { children, targetScroll } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#" + targetScroll
    )
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}
