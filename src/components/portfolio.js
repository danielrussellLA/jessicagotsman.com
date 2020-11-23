import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  const portFolioImages = data.allImageSharp.edges.filter(edge => {
    if (edge.node.fixed.src.match(/thumbnail/ig)) return true
    return false
  })
  return (
    <section css={css`
      padding: 4rem 1rem;
      background: #842a2a;
      text-align: center;
    `}>
      <div css={css`
        max-width: 960px;
        margin: 0 auto;
        color: white;
      `}>
        <h1>Client Work</h1>
        <div css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
        `}>
          {portFolioImages.map((edge, i) => {
            return (
              <Img
                fixed={edge.node.fixed} key={i}
                css={css`
                  margin: 1rem;
                `}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio