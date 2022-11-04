import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from "../style/index.module.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <section className={styles.indexIntro}>
        {/*  */}
        <h1 className={styles.indexIntroTitle}>{ data.site.siteMetadata.title }</h1>
        <p className={styles.indexIntroSubtitle}>{ data.site.siteMetadata.subtitle }</p>
        <p>
          <Link className='btn' to='#'>Read My Posts { "->" }</Link>
          <Link className='btn' to='#'>Read My Blog { "->" }</Link>
        </p>
      </section>
      <section className={styles.infoBox}>
        <div className={styles.infoList}>
          <div>
            <StaticImage src='../images/2.svg' alt="index-info" 
            height={200}
            width={200} />
          </div>
          <div className={styles.infoTitle}>前端相关知识</div>
          <div>
          这里是我的最新个人博客，我将在这里分享我在学习前端的过程中总结的知识和技能，分享给大家。
          </div>
        </div>
        <div className={styles.infoList}>
          <div>
            <StaticImage src='../images/5.svg' alt="index-info" 
            height={200}
            width={200} />
          </div>
            <div className={styles.infoTitle}>个人博客</div>
            <div>在这里，我也将总结我之前在其它平台发布的和以后将要发布的文章</div>
        </div>
        <div className={styles.infoList}>
          <div>
            <StaticImage src='../images/13.svg' alt="index-info" 
            height={200}
            width={200} />
          </div>
          <div className={styles.infoTitle}>关于我</div>
          <div>本人是双非一本，在大学学习生活中逐渐接触到前端，并一直对前端抱有强烈的兴趣爱好，目前正在努力成为一名前端开发者！</div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`query{
  site {
    siteMetadata {
      title
      subtitle
    }
  }
}`

export const Head = () => <Seo title="主页" />

export default IndexPage