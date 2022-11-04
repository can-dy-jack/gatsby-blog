import React from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    head, logo, links
} from "./head.module.css"
import { graphql, useStaticQuery } from 'gatsby';

export default function Head() {
    const data = useStaticQuery(graphql`query{
        site {
            siteMetadata {
              title
            }
        }
    }`)
    return (
        <header className={head}>
            <div className={logo}>
                <StaticImage 
                    alt="logo" 
                    src="../images/logo.jpg"
                    height={40}
                    width={40} />
                <span>{ data.site.siteMetadata.title }</span>
            </div>
            <nav className={links}>
                <Link to='#'>Home</Link>
                <Link to='#'>Posts</Link>
            </nav>
        </header>
    )
}