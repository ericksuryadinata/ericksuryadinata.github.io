import React from "react"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Zoom from "@material-ui/core/Zoom"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "@media (min-width:768px)":{
      position: "fixed",
      bottom: theme.spacing(1.5),
      left: theme.spacing(4),
      zIndex: 99,
    },
    position: "fixed",
    bottom: theme.spacing(1.5),
    left: theme.spacing(4),
    zIndex: 99,
  },
}))

export default function FloatingButton(props) {
  const { children } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  })

  return (
    <Zoom in={trigger}>
      <div role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}
