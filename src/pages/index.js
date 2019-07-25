import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container, Section } from '../components'
import hat from '../images/hat.gif'

const HatImage = s.img`
  max-width: 100%;
  height: auto;
  width: 12rem;
  display: block;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Section centerHorizontally centerVertically>
      <HatImage src={hat} alt="Hat" />
    </Section>

    <Section>
      <Container>
        <h1>We are a tech and entrepreneurship society at the University of Pennsylvania</h1>
        <p>
          Founded in 2014, Bell brings together a diverse group of Penn seniors and promotes the exchange of ideas and shared experiences.
        </p>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
