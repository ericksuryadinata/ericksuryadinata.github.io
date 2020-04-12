import React, { Component } from "react"
import PropTypes from "prop-types"
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"
import ScrollTop from "components/ScrollTop"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

class Layout extends Component {
  render() {
    const { children, ...rest } = this.props
    const dashboardRoutes = []
    return (
      <>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Erick Surya Dinata"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <div id="back-to-top" />
        {children}
        <Footer />
        <ScrollTop targetScroll="back-to-top" {...this.props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
