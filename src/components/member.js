import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import s from 'styled-components'

import { WHITE, BLACK, GRAY, RED } from '../shared/colors'
import { Container } from './Container'

const Wrapper = s.div`
  width: 17rem;
  margin: auto;
`

const MemberPhotoWrapper = s.div`
  max-width: 100%;
  height: 14rem;
  width: 17rem;
  display: block;
  object-fit: cover;
  margin-bottom: 0.5rem;
`

const MemberPhoto = s.img`
  max-width: 100%;
  height: 14rem;
  width: 17rem;
  display: block;
  object-fit: cover;
`

const Name = s.h1`
    color: ${BLACK};
    text-decoration: none !important;
    font-size: 1.25rem;
    margin-bottom: 0rem;
`

const Tagline = s.p`
    color: ${GRAY};
    text-decoration: none !important;
    font-size: .8rem;
`

const Member = ({ memberPhoto, memberName, memberTag }) => (
  <Wrapper>
    <MemberPhotoWrapper>
    <MemberPhoto src={memberPhoto} alt={memberName}></MemberPhoto>
    </MemberPhotoWrapper>
    <Name>{memberName}</Name>
    <Tagline>{memberTag}</Tagline>
  </Wrapper>
)

Member.propTypes = {
  memberName: PropTypes.string,
  memberTag: PropTypes.string,
}

Member.defaultProps = {
  memberName: "",
  memberTag: "",
}

export default Member
