import { container, title } from "assets/jss/material-kit-react.jsx"
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx"

const resumeStyle = {
  container: {
    ...container,
    zIndex: "12",
    color: "#FFFFFF",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    padding: "1.25rem 0",
  },
  section: {
    color: "#4299e1",
    borderStyle: "solid",
    borderWidth: "0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
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
    fontSize: "2.25rem",
    letterSpacing: "0.025em",
    lineHeight: "1.25",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", Arial, sans-serif`,
    margin: "0",
    "@media (min-width: 768px)": {
      fontSize: "3rem",
    },
  },
  job: {
    fontSize: "1.125rem",
    letterSpacing: "0.1em",
    lineHeight: "1.625",
    color: "#2a4365",
    textDecoration: "none",
    fontWeight: "300",
    fontFamily: `"Roboto Slab", Arial, sans-serif`,
    margin: "0",
    "@media (min-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
  pb2: {
    paddingBottom: "0.5rem",
  },
  py4: {
    padding: "1rem 0",
  },
  py5: {
    padding: "1.25rem 0",
  },
  py6: {
    padding: "1.5rem 0",
  },
  my5: {
    margin: "1.25rem 0",
  },
  my2: {
    margin: "0.5rem 0",
  },
  mb5: {
    margin: "1.25rem 0",
  },
  mb2: {
    marginBottom: ".5rem",
  },
  border: {
    borderBottomWidth: "1px",
    borderColor: "#e2e8f0",
  },
  contactContainer: {
    border: "0",
    "@media (min-width:768px)": {
      paddingLeft: "1rem",
      marginTop: "0",
      borderLeftWidth: "1px",
      borderColor: "#e2e8f0",
      borderStyle: "solid",
    },
  },
  contact: {
    letterSpacing: "0.1em",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    alignItems: "center",
    display: "flex",
  },
  svg: {
    marginRight: "1rem",
    display: "block",
  },
  contactLink: {
    color: "#2a4365",
    fontSize: "0.875rem",
  },
  ...imagesStyles,
  imgResponsive: {
    width: "50%",
    "@media (min-width:1280px)": {
      width: "80%",
    },
  },
  description: {
    letterSpacing: "0.025rem",
    lineHeight: "1.625",
    color: "#1a202c",
    textAlign: "center",
    "@media (min-width:1024px)": {
      fontSize: "1.125rem",
      textAlign: "left",
      marginLeft: ".5rem",
      marginBottom: "0",
    },
  },
  skillEduContainer: {
    border: 0,
    "@media (min-width:768px)": {
      paddingLeft: "1rem",
      marginTop: "0",
      borderLeftWidth: "1px",
      borderColor: "#e2e8f0",
      borderStyle: "solid",
    },
  },
  detailX: {
    color: "#1a202c",
  },
  sectionHeader: {
    color: "#4299e1",
    fontSize: "1.25rem",
    borderLeftWidth: "4px",
    borderColor: "#4299e1",
    paddingLeft: "0.75rem",
    fontWeight: "700",
    borderStyle: "solid",
  },
  itemHeader: {
    fontSize: "1.25rem",
    fontWeight: "700",
    letterSpacing: "-0.025em",
    lineHeight: "1.625",
    color: "#4a5568",
    margin: "0",
  },
  itemSub: {
    color: "#718096",
    letterSpacing: "0.025em",
    fontSize: "0.875rem",
    margin: "0",
  },
  xStory: {
    fontSize: "initial",
    margin: "0",
  },
  btnVisit: {
    float: "right",
    margin: "0",
    fontSize: "0.75rem",
    fontWeight: "700",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    borderRadius: "0.25rem",
  },
  itemHeaderSkill: {
    fontSize: "1.125rem",
    fontWeight: "600",
    letterSpacing: "-0.025em",
    lineHeight: "1.625",
    color: "#4a5568",
    margin: "0 0 0.5rem 0",
  },
  progress: {
    color: "#4a5568",
    fontSize: "0.875rem",
    fontWeight: "300",
  },
  eduYear: {
    color: "#a0aec0",
    fontWeight: "300",
    fontSize: "0.875rem",
  },
  footer: {
    color: "#4a5568",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  icon: {
    margin: "0.75rem 0.75rem",
  },
  iconLink: {
    color: "inherit",
    "&:hover": {
      color: "#4299e1",
    },
  },
}

export default resumeStyle
