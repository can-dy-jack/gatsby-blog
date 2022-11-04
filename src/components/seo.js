import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`query{
    site {
      siteMetadata {
        title
        description
      }
    }
  }`)

  return (
    <>
      <meta name="description" content={data.site.siteMetadata.description} />
      <title>{title} - {data.site.siteMetadata.title}</title>
    </>
  )
}

export default Seo;