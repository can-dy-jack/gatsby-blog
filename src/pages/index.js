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
          <Link className='btn' to='/about'>About með</Link>
        </p>
      </section>
      <section className={styles.infoBox}>
        <div className={styles.infoList}>
          <div>
            <StaticImage src='../images/2.svg' alt="index-info" 
            height={200}
            width={200} />
          </div>
          <div className={styles.infoTitle}>åç«¯ç¸å³ç¥è¯</div>
          <div>
          è¿éæ¯æçææ°ä¸ªäººåå®¢ï¼æå°å¨è¿éåäº«æå¨å­¦ä¹ åç«¯çè¿ç¨ä¸­æ»ç»çç¥è¯åæè½ï¼åäº«ç»å¤§å®¶ã
          </div>
        </div>
        <div className={styles.infoList}>
          <div>
            <StaticImage src='../images/5.svg' alt="index-info" 
            height={200}
            width={200} />
          </div>
            <div className={styles.infoTitle}>ä¸ªäººåå®¢</div>
            <div>å¨è¿éï¼æä¹å°æ»ç»æä¹åå¨å¶å®å¹³å°åå¸çåä»¥åå°è¦åå¸çæç« </div>
        </div>
        <div className={styles.infoList}>
          <div>
            <StaticImage src='../images/13.svg' alt="index-info" 
            height={200}
            width={200} />
          </div>
          <div className={styles.infoTitle}>å³äºæ</div>
          <div>æ¬äººæ¯åéä¸æ¬ï¼å¨å¤§å­¦å­¦ä¹ çæ´»ä¸­éæ¸æ¥è§¦å°åç«¯ï¼å¹¶ä¸ç´å¯¹åç«¯æ±æå¼ºççå´è¶£ç±å¥½ï¼ç®åæ­£å¨åªåæä¸ºä¸ååç«¯å¼åèï¼</div>
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

export const Head = () => <Seo title="ä¸»é¡µ" />

export default IndexPage