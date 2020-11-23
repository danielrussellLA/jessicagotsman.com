import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/about'
import Portfolio from "../components/portfolio";

const IndexPage = () => (
  <Layout>
    <SEO title="Jessica Gotsman" />
    <About />
    <Portfolio />
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
