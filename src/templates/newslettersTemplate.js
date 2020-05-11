import React from "react"
import { graphql } from "gatsby"

import SEO from 'components/seo';
import { rhythm } from 'utils';

export default function NewsletterTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter: { title }, html } = markdownRemark

  return (
    <>
      <SEO title={`${title}`} />

      <div class="gradient-background">
        <section class="container" style={{ margin: rhythm(0.5) }}>
          <div className="columns is-centered">
            <div className="column is-8">
              <h1 class="title">{title}</h1>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

