import { cardTitle, title } from "assets/jss/material-kit-react.jsx"
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx"

const blogItemStyle = {
  section: {
    padding: "10px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle: {
    ...cardTitle,
    margin: 0,
  },
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    marginTop: "1rem",
    color: "#999",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  margin5: {
    margin: "5px",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
    marginLeft: "5px",
  },
  iconSmall: {
    width: "8px",
    height: "8px",
    marginLeft: "5px",
  },
  timeToRead: {
    float: "right",
  },
  cardHeader: {
    padding: 0,
    marginTop: 0,
  },
}

export default blogItemStyle
