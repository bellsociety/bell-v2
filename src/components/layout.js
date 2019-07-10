/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

import './layout.css'

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
        <ContentWrapper>
          <Header />

          <main>{children}</main>
        </ContentWrapper>

        <Nav show={showNav} toggle={this.toggleNav} />

        <Footer />

        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet"></link>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
