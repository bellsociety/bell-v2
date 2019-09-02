import React, { Component } from "react"
import PropTypes from "prop-types"
import s from "styled-components"

import { GRAY, BLACK } from "../shared/colors"

const Wrapper = s.div`
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
`

const Filter = s.div`
  display: block;
  float: left;
  margin-right: 2rem;
`

const FilterCircle = s.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 1px solid black;
  display: block;
  float: left;
  position: relative;
  top: 0.25rem;
  background-color: "#FFFFFF";
  transition: all 0.25s ease;
`

const FilterLabel = s.p`
  display: block;
  float: left;
  margin-left: 1rem;
`

const selectedCircle = {
  backgroundColor: "#000000",
}

const YearFilter = s.div`
  display: block;
  float: left;
  margin-right: 2rem;
  transition: all 0.25s ease;
  position: relative;

`

const YearCarousel = s.div`
  display: block;
  float: left;
  margin-right: 2rem;
  position: relative;
  left: 0rem;
  transition: all 0.25s ease;
`

const Year = s.p`
  display: block;
  float: left;
  margin-right: 1rem;
  color: ${GRAY};
  transition: all 0.25s ease;
`

const selectedYear = {
  color: BLACK,
}

const showYear = {
  opacity: 1,
}

const hideYear = {
  opacity: 0,
}

class MembersFilter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { filter, classYear } = this.props

    return (
      <Wrapper>
        <Filter>
          <FilterCircle
            style={filter === "everyone" ? selectedCircle : {}}
            onClick={this.props.toggleFilter.bind(this, "everyone")}
          ></FilterCircle>
          <FilterLabel>everyone</FilterLabel>
        </Filter>
        <Filter>
          <FilterCircle
            style={filter === "honorary" ? selectedCircle : {}}
            onClick={this.props.toggleFilter.bind(this, "honorary")}
          ></FilterCircle>
          <FilterLabel>honorary</FilterLabel>
        </Filter>
        <Filter>
          <FilterCircle
            style={filter === "current board" ? selectedCircle : {}}
            onClick={this.props.toggleFilter.bind(this, "current board")}
          ></FilterCircle>
          <FilterLabel>current board</FilterLabel>
        </Filter>
        <Filter>
          <FilterCircle
            style={filter === "by class" ? selectedCircle : {}}
            onClick={this.props.toggleFilter.bind(this, "by class")}
          ></FilterCircle>
          <FilterLabel>by class</FilterLabel>
        </Filter>
        <YearFilter style={filter === "by class" ? showYear : hideYear}>
          <YearCarousel style={classYear === "2014" ? {} : {}}>
            <Year
              style={classYear === "2014" ? selectedYear : {}}
              onClick={this.props.toggleYear.bind(this, "2014")}
            >
              2014
            </Year>
            <Year
              style={classYear === "2015" ? selectedYear : {}}
              onClick={this.props.toggleYear.bind(this, "2015")}
            >
              2015
            </Year>
            <Year
              style={classYear === "2016" ? selectedYear : {}}
              onClick={this.props.toggleYear.bind(this, "2016")}
            >
              2016
            </Year>
            <Year
              style={classYear === "2017" ? selectedYear : {}}
              onClick={this.props.toggleYear.bind(this, "2017")}
            >
              2017
            </Year>
            <Year
              style={classYear === "2018" ? selectedYear : {}}
              onClick={this.props.toggleYear.bind(this, "2018")}
            >
              2018
            </Year>
            <Year
              style={classYear === "2019" ? selectedYear : {}}
              onClick={this.props.toggleYear.bind(this, "2019")}
            >
              2019
            </Year>
            <Year
              style={classYear === "2020" ? selectedYear : {}}
              onClick={this.props.toggleYear.bind(this, "2020")}
            >
              2020
            </Year>
          </YearCarousel>
        </YearFilter>
      </Wrapper>
    )
  }
}

MembersFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  classYear: PropTypes.string.isRequired,
}

MembersFilter.defaultProps = {
}

export default MembersFilter
