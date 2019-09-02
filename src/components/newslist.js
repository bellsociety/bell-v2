import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import s from "styled-components"

import { BLACK, GRAY } from "../shared/colors"


const NewsContainer = s.div`

  `

const NewsTitle = s.p`
    font-size: 1.25rem;
    margin-bottom: 0.3rem;

    a {
        color: ${BLACK};
    }
  `

const NewsDescription = s.p`
    color: ${GRAY};
    text-decoration: none !important;
    font-size: .8rem;
    line-height: 1rem;
  `

class NewsList extends Component {

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query NewsQuery {
                        allNewsJson {
                            edges {
                                node {
                                    title
                                    url
                                    name
                                    year
                                    id
                                }
                            }
                        }
                    }
                `}
                render={data => {
                    const news = data.allNewsJson.edges.map(
                        ({ node }) => node
                    )

                    return (
                        <>
                            <NewsContainer>
                                {news
                                    .map(newsPiece => (
                                        <div>
                                            <NewsTitle key={newsPiece.id}><a target="_blank" href={newsPiece.url}>{newsPiece.title}</a></NewsTitle>
                                            <NewsDescription key={newsPiece.id}>{newsPiece.name}, {newsPiece.year}</NewsDescription>
                                        </div>
                                ))}
                            </NewsContainer>
                        </>
                    )
                }}
            />
        )
    }
}

NewsList.propTypes = {
    filter: PropTypes.string,
    yearFilter: PropTypes.string,
}

NewsList.defaultProps = {
    filter: "by class",
    yearFilter: "2020",
}

export default NewsList
