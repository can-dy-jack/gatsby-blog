import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import About from '../posts/about.mdx'

const AboutPage = () => {
    return (
      <Layout>
        <article className='article'>
            <About />
        </article>
      </Layout>
    )
}

export const Head = () => <Seo title="About me" />

export default AboutPage