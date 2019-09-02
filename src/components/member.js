import PropTypes from "prop-types"
import React from "react"
import s from "styled-components"

import { BLACK, GRAY } from "../shared/colors"

const Wrapper = s.div`
    width: 24%;
    margin-left: 0px;
    margin-top: 0px;
    padding-right: 20px;
`

const MemberPhotoWrapper = s.div`
    height: auto;
    width: 100%;
    display: block;
    object-fit: cover;
    margin-bottom: 0.5rem;
    position: relative;
`

const MemberDetails = s.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    line-height: 0.3rem;
    font-size: .8rem;

    &:hover {
        opacity: 1;
    }

    a{

        color: white;
    }
`

const MemberPhoto = s.div`
    -webkit-filter: grayscale(100%) contrast(95%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%) contrast(95%);
    width: 100%;
    height: auto;
    display: block;
    padding-top: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const Name = s.h1`
    color: ${BLACK};
    text-decoration: none !important;
    font-size: 1.25rem;
    margin-bottom: 0.3rem;
`

const Tagline = s.p`
    color: ${GRAY};
    text-decoration: none !important;
    font-size: .8rem;
    line-height: 1rem;
`

const BoardPosition = s.p`
    color: ${BLACK};
    text-decoration: none !important;
    font-size: .7rem;
    margin-bottom: 0rem;
    text-transform: uppercase;
`

const MemberImage = ({ filter, url, boardPosition, dribbble, email, facebook, github, linkedin, twitter, website, year}) => (
    <MemberPhotoWrapper>
        {url && (
            <MemberPhoto
                style={{
                    backgroundImage: `url(${url})`,
                }}
            />
        )}
        <MemberDetails>
            {boardPosition && filter !== "current board" && year !== "2020" && (
                <p><b><i>Former {boardPosition}</i></b></p>
            )}
            {boardPosition && filter !== "current board" && year === "2020" && (
                <p><b><i>{boardPosition}</i></b></p>
            )}
            {email && (
                <p><a target="_blank" rel="noopener noreferrer" href={email}><i>email </i></a></p>
            )}
            {linkedin && (
                <p><a target="_blank" rel="noopener noreferrer" href={linkedin}><i>Linkedin </i></a></p>
            )}
            {github && (
                <p><a target="_blank" rel="noopener noreferrer" href={github}><i>Github </i></a></p>
            )}
            {website && (
                <p><a target="_blank" rel="noopener noreferrer" href={website}><i>website </i></a></p>
            )}
            {dribbble && (
                <p><a target="_blank" rel="noopener noreferrer" href={dribbble}><i>Dribbble </i></a></p>
            )}
            {facebook && (
                <p><a target="_blank" rel="noopener noreferrer" href={facebook}><i>Facebook </i></a></p>
            )}
            {twitter && (
                <p><a target="_blank" rel="noopener noreferrer" href={twitter}><i>Twitter </i></a></p>
            )}
        </MemberDetails>
    </MemberPhotoWrapper>
)

const Member = ({ filter, headshotJpgUrl, name, tagline, boardPosition, dribbble, email, facebook, github, linkedin, twitter, website, year }) => (
    <Wrapper>
        <MemberImage filter={filter} url={headshotJpgUrl} boardPosition={boardPosition} dribbble={dribbble} email={email} facebook={facebook} github={github} linkedin={linkedin} twitter={twitter} website={website} year={year}/>
        {filter === "current board" && (
            <BoardPosition><b>{boardPosition}</b></BoardPosition>
        )}
        <Name>{name}</Name>
        <Tagline>{tagline}</Tagline>
    </Wrapper>
)

Member.propTypes = {
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    headshotJpgUrl: PropTypes.string,
}

Member.defaultProps = {
    tagline: "",
    headshotJpgUrl: "",
}

export default Member
