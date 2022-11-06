import { Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Doc from "../../posts/doc.mdx";

function DocPage () {
    return (
        <Layout>
            <section>
                sidebar
                <Link to="/doc/flex" >flex</Link>
            </section>
            <section>
                <div>
                    <Doc />
                    <div>posts list</div>
                </div>
                <div>TOC</div>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="文章页面" />

export default DocPage;