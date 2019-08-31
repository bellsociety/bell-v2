/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import s from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav"

import "./layout.css" // This injects the CSS into the doc

const ContentWrapper = s.div`
  min-height: 100vh;
  width: 100%;
`

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = { showNav: false }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    const { showNav } = this.state
    this.setState({ showNav: !showNav })
  }

  render() {
    const { children } = this.props
    const { showNav } = this.state

    return (
      <>
        <Nav show={showNav} toggle={this.toggleNav} />
        <ContentWrapper>
          <Header />
          <main>{children}</main>
        </ContentWrapper>
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
