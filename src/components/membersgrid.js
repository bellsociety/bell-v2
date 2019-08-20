import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import Member from '../components/member'
import MembersFilter from '../components/membersfilter'
import bellPic from '../images/bell.jpg'

const MembersNav = s.div`
    display: flex;
    flex-flow: row wrap;
  `

const MembersContainer = s.div`
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    justify-content: flex-start;
  `

class MembersGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "everyone" };
    this.toggleFilter = this.toggleFilter.bind(this)
  }

  toggleFilter(selectedFilter) {
    const { filter } = this.state
    this.setState({ filter: selectedFilter })
  }

  render() {
    const { filter } = this.state;

    return (
      <>
        <MembersFilter filter={filter}></MembersFilter>
        <MembersContainer>
          <Member memberPhoto={bellPic} memberName="Alex Bell" memberTag="eyes wide open"></Member>
          <Member memberPhoto={bellPic} memberName="Alex Bell" memberTag="eyes wide open"></Member>
          <Member memberPhoto={bellPic} memberName="Alex Bell" memberTag="eyes wide open"></Member>
          <Member memberPhoto={bellPic} memberName="Alex Bell" memberTag="eyes wide open"></Member>
          <Member memberPhoto={bellPic} memberName="Alex Bell" memberTag="eyes wide open"></Member>
          <Member memberPhoto={bellPic} memberName="Alex Bell" memberTag="eyes wide open"></Member>
        </MembersContainer>
      </>
    )
  }
}

MembersGrid.propTypes = {
  filter: PropTypes.string.isRequired,
}

export default MembersGrid
