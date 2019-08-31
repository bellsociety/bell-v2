import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MembersGrid from '../components/membersgrid'

import { Container, Section } from '../components'

import { BLUE } from '../shared/colors'
import './animate.css'

const MembersHeader = s.h1`
    font-size: 12vh;
    color: ${BLUE};
  `

const MembersPage = () => (
  <Layout>
    <SEO title="Members" />
    <ParallaxProvider>
     <Parallax y={[-40, 40]}>
      <Section centerVertically>
        <Container>
          <MembersHeader className="animated fadeInDown">members</MembersHeader>
        </Container>
      </Section>
    </Parallax>
    <Parallax y={[-20, 20]}>
      <Section>
        <MembersGrid></MembersGrid>
      </Section>
    </Parallax>
    </ParallaxProvider>
  </Layout>
)

export default MembersPage
