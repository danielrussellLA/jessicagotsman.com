import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle, description }) => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "hollywoodBgImg.jpg" }) {
        childImageSharp {
          fixed(width: 1240, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header
      css={css`
        height: 100vh;
        position: relative;
      `}
    >
      <Img
        fixed={data.background.childImageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 css={css`
          margin: 0 0 0.25rem;
          font-size: 2.5rem;
        `}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h3 style={{ color: 'white', }}>
          {description}
        </h3>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
