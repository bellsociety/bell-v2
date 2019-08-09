import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container, Section } from '../components'
import { YELLOW } from '../shared/colors'

const NewsHeader = s.h1`
    font-size: 12vh;
    color: ${YELLOW};
  `

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <Section centerVertically>
      <Container>
        <NewsHeader>
          in the news
        </NewsHeader>
      </Container>
    </Section>
    <Section>
      <Container>
        <p>
          coming soon
        </p>
      </Container>
    </Section>
  </Layout>
)

export default NewsPage
