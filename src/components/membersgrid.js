import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import s from "styled-components"

import Member from "./Member"
import MembersFilter from "./membersfilter"
import bellPic from "../images/bell.jpg"

const MembersContainer = s.div`
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    justify-content: flex-start;
  `

class MembersGrid extends Component {
    constructor(props) {
        super(props)
        this.state = { filter: "by class", yearFilter: "2020" }
        this.toggleFilter = this.toggleFilter.bind(this)
        this.toggleYear = this.toggleYear.bind(this)
    }

    toggleFilter(selectedFilter) {
        const { filter } = this.state
        this.setState({ filter: selectedFilter || filter })
    }

    toggleYear(selectedYear) {
        const { yearFilter } = this.state
        this.setState({ yearFilter: selectedYear || yearFilter })
    }

    render() {
        const { filter, yearFilter } = this.state
        return (
            <StaticQuery
                query={graphql`
                    query MembersQuery {
                        allMembersJson {
                            edges {
                                node {
                                    name
                                    year
                                    boardPosition
                                    dribbble
                                    email
                                    facebook
                                    github
                                    headshotJpgUrl
                                    id
                                    linkedin
                                    personalSite
                                    tagline
                                    twitter
                                }
                            }
                        }
                    }
                `}
                render={data => {
                    const members = data.allMembersJson.edges.map(
                        ({ node }) => node
                    )

                    return (
                        <>
                            <MembersFilter toggleFilter={this.toggleFilter} toggleYear={this.toggleYear} filter={filter} classYear={yearFilter} />
                            <MembersContainer>
                                {members
                                    .filter(({ year }) => year === yearFilter)
                                    .map(member => (
                                        <Member key={member.id} {...member} />
                                    ))}
                            </MembersContainer>
                        </>
                    )
                }}
            />
        )
    }
}

MembersGrid.propTypes = {
    filter: PropTypes.string,
    yearFilter: PropTypes.string,
}

MembersGrid.defaultProps = {
    filter: "by class",
    yearFilter: "2020",
}

export default MembersGrid
