import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { footer } from "./footer.module.css";

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
            <div>
                Copyright © 2000-2022 {' '}
                <a href={ data.site.siteMetadata.authorGithub } target="_blank">
                    { data.site.siteMetadata.author }
                </a>
            </div>
            <div>
                Powered by {' '}
                <a href="https://www.gatsbyjs.com/" target="_blank">
                    Gatsby
                </a>
            </div>
        </footer>
    );
}

export default Footer;