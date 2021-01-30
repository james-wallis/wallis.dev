import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import Header from './Header'
import SocialIcons from './SocialIcons'
import Footer from './Footer'

type Props = {
    children: ReactNode
    title: string
    description: string
}

const Layout = ({ children, title, description }: Props) => (
    <div>
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <Header />
        <main className="
            flex flex-col items-start w-full pt-10
            px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
            pt-24
        ">
            {children}
        </main>
        <Footer />
    </div>
)

export default Layout
