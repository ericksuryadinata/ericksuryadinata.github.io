import { container, title } from "assets/jss/material-kit-react.jsx"

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx"

const aboutStyle = {
  section: {
    padding: "70px 0 20px 0",
  },
  container,
  space50: {
    height: "50px",
    display: "block",
  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
    },
  },
  ...imagesStyles,
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  job: {
    color: "#3c4858",
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
}

export default aboutStyle
