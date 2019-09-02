import React from "react"
import s from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsList from "../components/newslist"

import { Container, Section } from "../components"
import { YELLOW, GRAY } from "../shared/colors"
import "./animate.css"

const NewsHeader = s.h1`
  font-size: 12vh;
  color: ${YELLOW};
`

const NewsAbout = s.p`
  font-size: .8rem;
  color: ${GRAY};
`

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <Section centerVertically>
      <Container>
        <NewsHeader className="animated fadeInDown">in the news</NewsHeader>
      </Container>
    </Section>
    <Section>
      <Container>
        <NewsAbout><i>selected articles of our community members</i></NewsAbout>
        <NewsList></NewsList>
      </Container>
    </Section>
  </Layout>
)

export default NewsPage
