import { container, title } from "assets/jss/material-kit-react.jsx"

const blogPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  section: {
    padding: "20px 0",
  },
  parallaxTitle: {
    ...title,
    textAlign: "center",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  title: {
    ...title,
    marginBottom: 0,
    marginTop: "10px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  postTitle: {
    ...title,
    marginBottom: 0,
    marginTop: "10px",
    minHeight: "32px",
    textDecoration: "none"
  },
  smallTitle: {
    color: "#6c757d",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-90px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
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
  credit: {
    fontSize: "1rem",
    color: "#FFFFFF",
    margin:"1rem 0.5rem",
    position:"fixed",
    writingMode:"vertical-rl",
    textOrientation:"mixed",
    top:"30px"
  },
  description: {
    color: "#000000",
    "& div": {
      textAlign: "justify",
      "& blockquote": {
        padding: "10px 20px",
        margin: "0 0 20px",
        fontSize: "17.5px",
        borderLeft: "5px solid #eee",
      }
    },
  },
}

export default blogPageStyle
