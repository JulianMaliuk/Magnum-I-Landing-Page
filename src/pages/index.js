import React, {} from "react"
import { useIntl } from "gatsby-plugin-intl"

import { Layout, SEO, HomePage, SelectionSystem, Systems, FAQ, ReliableProtection, Contacts } from '../components'

const IndexPage = () => {
  const intl = useIntl()

  return <Layout>
    <SEO 
      title={intl.formatMessage({ id: "title" })} 
      description={intl.formatMessage({ id: "description" })} />
    <HomePage />
    <ReliableProtection />
    <SelectionSystem />
    <Systems />
    <FAQ />
    <Contacts />
  </Layout>
}

export default IndexPage
