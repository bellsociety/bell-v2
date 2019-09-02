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
`

const MemberPhoto = s.div`
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
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
    margin-bottom: 0rem;
`

const Tagline = s.p`
    color: ${GRAY};
    text-decoration: none !important;
    font-size: .8rem;
`

const MemberImage = ({ url }) => (
    <MemberPhotoWrapper>
        {url && (
            <MemberPhoto
                style={{
                    backgroundImage: `url(${url})`,
                }}
            />
        )}
    </MemberPhotoWrapper>
)

const Member = ({ headshotJpgUrl, name, tagline }) => (
    <Wrapper>
        <MemberImage url={headshotJpgUrl} />
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
