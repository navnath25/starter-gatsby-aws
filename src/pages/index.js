import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const magazins = get(this, 'props.data.allContentfulMagazine.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={author.node} />
        <div className="wrapper">
          <section class="section p-0">
            <div class="container">
              <div class="row">
                {magazins.map(({ node }) => {
                  return <ArticlePreview article={node} />
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulMagazine {
      edges {
        node {
          title
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`
