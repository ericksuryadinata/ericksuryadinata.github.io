import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
} from "assets/jss/material-kit-react.jsx"

const badgeStyle = {
  badge: {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    borderRadius: "12px",
    padding: "5px 12px",
    fontSize: "0.8rem",
    fontWeight: "300",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block",
  },
  primary: {
    backgroundColor: primaryColor,
  },
  warning: {
    backgroundColor: warningColor,
  },
  danger: {
    backgroundColor: dangerColor,
  },
  success: {
    backgroundColor: successColor,
  },
  info: {
    backgroundColor: infoColor,
  },
  rose: {
    backgroundColor: roseColor,
  },
  gray: {
    backgroundColor: "#6c757d",
  },
}

export default badgeStyle
