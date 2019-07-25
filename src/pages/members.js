import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container, Section } from '../components'

import { BLUE } from '../shared/colors'

const MembersHeader = s.h1`
    font-size: 12vh;
    color: ${BLUE};
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
      <Container>
        <p>
          Images go here
        </p>
      </Container>
    </Section>
  </Layout>
)

export default MembersPage
