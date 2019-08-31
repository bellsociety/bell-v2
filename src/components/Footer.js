import React from "react"
import s from "styled-components"

import { Container } from "./Container"
import { WHITE, GRAY } from "../shared/colors"

const Wrapper = s.footer`
    width: 100%;
    background: ${WHITE};
    color: ${GRAY};
    text-align: center;
    padding: 1rem 0;
    font-size: 80%;

    p {
        margin: 0;
    }
`

export default () => (
  <Container>
    <Wrapper>
      <p>
        Bell Senior Society &copy; {new Date().getFullYear()}, All Rights
        Reserved.
      </p>
    </Wrapper>
  </Container>
)
