import PropTypes from 'prop-types'
import React from 'react'
import s from 'styled-components'

import { BLACK, GRAY } from '../shared/colors'

const Wrapper = s.div`
  width: 24%;
  min-width: 200px;
  margin-left: 0px;
  margin-top: 0px;
  padding-right: 20px;
`

const MemberPhotoWrapper = s.div`
  max-width: 100%;
  height: auto;
  width: 100%;
  display: block;
  object-fit: cover;
  margin-bottom: 0.5rem;
`

const MemberPhoto = s.img`
  max-width: 100%;
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
      <MemberPhoto src={memberPhoto} alt={memberName} />
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
  memberName: '',
  memberTag: '',
}

export default Member
