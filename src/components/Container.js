import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

const ContainerWrapper = s.div`
    width: 100%;
    padding: 0 1rem;
`

export const Container = ({ children }) => (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
)

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

const SectionWrapper = s.div`
    min-height: 100vh;
    padding: 5vh 0;
    display: flex;
    flex-direction: column;
    padding-left: 80px;

    ${({ centerHorizontally }) => centerHorizontally && `
        text-align: center;
        align-items: center;
    `}

    ${({ centerVertically }) => centerVertically && `
        justify-content: center;
    `}
`

export const Section = ({ centerHorizontally, centerVertically, children }) => (
    <SectionWrapper centerHorizontally={centerHorizontally} centerVertically={centerVertically}>
        {children}
    </SectionWrapper>
)

Section.propTypes = {
    centerHorizontally: PropTypes.bool,
    centerVertically: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

Section.defaultProps = {
    centerHorizontally: false,
    centerVertically: false,
}
