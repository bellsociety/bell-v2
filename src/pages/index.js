import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container, Section } from '../components'
import hat from '../images/hat.gif'

const HatImage = s.img`
  max-width: 100%;
  height: auto;
  width: 7rem;
  display: block;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ParallaxProvider>
      <Parallax y={[-40, 40]}>
        <Section centerHorizontally centerVertically>
          <HatImage src={hat} alt="Hat" />
        </Section>
      </Parallax>

      <Section>
        <Container>
          <Parallax y={[-20, 20]}>
          <h1>We are a tech and entrepreneurship society at the University of Pennsylvania</h1>
          </Parallax>
          <h2>
            Founded in 2014, Bell brings together a diverse group of Penn seniors and promotes the exchange of ideas and shared experiences.
          </h2>
        </Container>
      </Section>
    </ParallaxProvider>
  </Layout>
)

export default IndexPage
