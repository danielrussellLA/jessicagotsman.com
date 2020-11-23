import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      jessicaImage: file(relativePath: { eq: "jessica-photo.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section
      css={css`
        padding: 4rem 1rem;
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
        @media (max-width: 750px) {
          flex-direction: column;
        }
      `}
    >
      <div css={css`padding: 3rem;`}>
        <Img fixed={data.jessicaImage.childImageSharp.fixed} />
      </div>
      <div>
        <h1>Entertainment marketer.<br />Relationship builder.</h1>
        <p>
          Based in Los Angeles, CA, I’m currently a Manager of Marketing & Promotions at <b>zakHill Group</b>, working with our entertainment clients. Over the years I’ve worked on behalf of Warner Bros., Disney, Starz, and more.
                        </p>
        <p>
          Specializing in marketing partnerships in the entertainment industry, I've built campaigns from inception to execution, and worked with brands in all industries.
                        </p>
        <p>
          I am passionate about entertainment and have a proven track record of building brand and client relationships on all my projects.
                </p>
        <span>Email: </span><a href="mailto:jessicagotsman@gmail.com">jessicagotsman@gmail.com</a>
      </div>
    </section>
  )
}

export default About