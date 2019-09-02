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
        this.state = { filter: "everyone" }
        this.toggleFilter = this.toggleFilter.bind(this)
    }

    toggleFilter(selectedFilter) {
        const { filter } = this.state
        this.setState({ filter: selectedFilter || filter })
    }

    render() {
        const { filter } = this.state

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
                            <MembersFilter filter={filter} />
                            <MembersContainer>
                                {members
                                    .filter(({ year }) => year === "2020")
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
}

MembersGrid.defaultProps = {
    filter: "",
}

export default MembersGrid
