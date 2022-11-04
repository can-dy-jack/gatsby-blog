import * as React from 'react'
import Footer from './footer'
import Global from './global'
import Head from './head'

const Layout = ({ children }) => {

    return (
        <Global>
            <Head/>
            <main>
                {children}
            </main>
            <Footer />
        </Global>
    )
}

export default Layout