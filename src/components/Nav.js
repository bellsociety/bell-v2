import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'
import { Link } from 'gatsby'

import { BLACK, WHITE } from '../shared/colors'

const Bars = s.div`
    width: 48px;
    position: fixed;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 2;
`

const Bar = s.span`
    width: 100%;
    height: 6px;
    display: block;
    background: ${BLACK};
    margin-bottom: 10px;
`

const Menu = s.div`
    position: fixed;
    max-width: 0;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
    background: ${WHITE};
    z-index: 1;
    display: block;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all 0.5s ease;

    ${({ show }) => show && `
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
                <Link to="/about">About</Link>
                <Link to="/members">Members</Link>
                <Link to="/news">In the news</Link>
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
