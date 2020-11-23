/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <div>
        <main>{children}</main>
        <footer css={css`
          font-family: 'Roboto Slab', sans-serif;
          text-align: center;
          padding: 1rem;
          background: #000;
          color: white;
        `}>
          © {new Date().getFullYear()}, Jessica Gotsman
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
