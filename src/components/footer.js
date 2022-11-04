import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { footer, links, infos } from "./footer.module.css";

function Footer() {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          authorGithub
        }
      }
    }
    `)
    return (
        <footer className={footer}>
            <section className={links}>
                <div>
                    <span>文档</span>
                    {/* FIXME */}
                    <Link to="#" >html</Link>
                    <Link to="#" >css</Link>
                    <Link to="#" >javascript</Link>
                    <Link to="#" >React</Link>
                </div>
                <div>
                    <span>友链</span>
                    {/* FIXME */}
                    <a href="https://www.docusaurus.cn/" rel="friends-link" target="_blank" >Docusaurus</a>
                    <a href="https://github.com/" rel="friends-link" target="_blank" >GitHub</a>
                    <a href="https://leetcode.cn/" rel="friends-link" target="_blank" >leetcode.cn</a>
                </div>
                <div>
                    <span>前端必逛网站</span>
                    {/* FIXME */}
                    <a href="https://developer.mozilla.org/zh-CN/" rel="friends-link" target="_blank" >MDN</a>
                    <a href="https://github.com/" rel="friends-link" target="_blank" >GitHub</a>
                    <a href="https://frontendmasters.com/courses/" rel="friends-link" target="_blank" >Frontend Masters</a>
                </div>
            </section>
            <section className={infos}>
                <div>
                    Copyright © 2000-2022 {' '}
                    <a href={ data.site.siteMetadata.authorGithub } target="_blank" rel="noreferrer">
                        { data.site.siteMetadata.author }
                    </a>
                </div>
                <div>
                    Powered by {' '}
                    <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
                        Gatsby
                    </a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;