import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import s from 'styled-components'

import { BLACK } from '../shared/colors'
import { Container } from './Container'

const Wrapper = s.div`
  width: 100%;
  position: absolute;
  padding: 2rem 0;
`

const Title = s.h1`
  a {
    color: ${BLACK};
    text-transform: lowercase;
    text-decoration: none !important;
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Wrapper>
        <Title style={{ margin: 0 }}>
          <Link to="/">
            {siteTitle}
          </Link>
        </Title>
      </Wrapper>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `bell`,
}

export default Header
