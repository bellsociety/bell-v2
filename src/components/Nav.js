import React from "react"
import PropTypes from "prop-types"
import s from "styled-components"
import { Link } from "gatsby"

import { BLACK, WHITE, RED, BLUE, YELLOW } from "../shared/colors"

const Z_INDEX = 2

const Bars = s.div`
    width: 30px;
    position: fixed;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: ${Z_INDEX + 1};
`

const Bar = s.span`
    width: 100%;
    height: 4px;
    display: block;
    background: ${BLACK};
    margin-bottom: 5px;
`

const Menu = s.div`
    position: fixed;
    max-width: 0;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
    background: ${WHITE};
    z-index: ${Z_INDEX};
    display: block;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all 0.5s ease;

    ${({ show }) =>
        show &&
        `
        opacity: 1;
        max-width: 100vw;
        transform: scale(1);
    `}
`

const MenuContent = s.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        font-size: 12vh;
        color: ${BLACK};
        margin: 8vh 0;
        font-weight: bold;
        text-decoration: none;
        width: 70%;
        text-align: right;
        transition: all 0.4s ease;
    }

    a#about:hover {
        color: ${RED};
    }

    a#members:hover {
        color: ${BLUE};
    }

    a#news:hover {
        color: ${YELLOW};
    }
`

const Nav = ({ show, toggle }) => (
    <>
        <Bars onClick={toggle}>
            <Bar />
            <Bar />
            <Bar />
        </Bars>

        <Menu show={show}>
            <MenuContent>
                <Link id="about" to="/">
                    about
                </Link>
                <Link id="members" to="/members">
                    members
                </Link>
                <Link id="news" to="/news">
                    in the news
                </Link>
            </MenuContent>
        </Menu>
    </>
)

Nav.propTypes = {
    show: PropTypes.bool,
    toggle: PropTypes.func.isRequired,
}

Nav.defaultProps = {
    show: false,
}

export default Nav
