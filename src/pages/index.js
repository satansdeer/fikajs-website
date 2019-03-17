import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TopHeader = styled.h1`
  text-align: center;
  color: #ffdb25;
  margin-bottom: 50px;
  margin-top: 50px;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const Panel = styled.div`
  background-color: #2a2e35;
  max-width: 400px;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.38);
  border-radius: 6px;
  padding: 30px 30px 10px 30px;
`

const PanelTitle = styled.h2`
  text-align: center;
`

const PanelText = styled.p`
  color: #b0bccb;
  text-align: center;
  font-family: Roboto, sans-serif;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TopHeader>FikaJS</TopHeader>
    <FlexContainer>
      <Panel>
        <PanelTitle>Work In Progress</PanelTitle>
        <PanelText>We are currently working on this website.</PanelText>
        <PanelText>
          Soon you'll be able to register here to participate in future events.
        </PanelText>
      </Panel>
    </FlexContainer>
  </Layout>
)

export default IndexPage
