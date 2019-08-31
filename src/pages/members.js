import React from "react"
import s from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MembersGrid from "../components/membersgrid"

import { Container, Section } from "../components"

import { BLUE } from "../shared/colors"
import "./animate.css"

const MembersHeader = s.h1`
  font-size: 12vh;
  color: ${BLUE};
`

const MembersPage = () => (
  <Layout>
    <SEO title="Members" />
    <Section centerVertically>
      <Container>
        <MembersHeader className="animated fadeInDown">members</MembersHeader>
      </Container>
    </Section>
    <Section>
      <MembersGrid></MembersGrid>
    </Section>
  </Layout>
)

export default MembersPage
