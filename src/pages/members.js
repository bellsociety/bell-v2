import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Member from '../components/member'

import { Container, Section } from '../components'

import { BLUE } from '../shared/colors'
import bellPic from '../images/bell.jpg'

const MembersHeader = s.h1`
    font-size: 12vh;
    color: ${BLUE};
  `

const MembersContainer = s.div`
    display: flex;
    flex-flow: row wrap;
  `

const MembersPage = () => (
  <Layout>
    <SEO title="Members" />
    <Section centerVertically>
      <Container>
        <MembersHeader>members</MembersHeader>
      </Container>
    </Section>
    <Section>
      <Container>
        <p>
          Filters go here
        </p>
      </Container>
      <MembersContainer>
        <Member memberPhoto={bellPic} memberName="Tiffany Yue" memberTag="eyes wide open"></Member>
        <Member memberPhoto={bellPic} memberName="Tiffany Yue" memberTag="eyes wide open"></Member>
        <Member memberPhoto={bellPic} memberName="Tiffany Yue" memberTag="eyes wide open"></Member>
        <Member memberPhoto={bellPic} memberName="Tiffany Yue" memberTag="eyes wide open"></Member>
      </MembersContainer>
    </Section>
  </Layout>
)

export default MembersPage
