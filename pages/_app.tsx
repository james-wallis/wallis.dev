import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'


import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
    const url: string = `https://wallis.dev${router.route}`;
    return <>
        <Head>
            <link rel="icon" href="/favicon.png" type="image/png" />
        </Head>
        <DefaultSeo
            titleTemplate='%s - James Wallis'
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url,
                description: 'The personal website for James Wallis, developer.',
                site_name: 'James Wallis | wallis.dev',
                images: [],
            }}
            canonical={url}
        />
        <Component {...pageProps} canonical={url} />
    </>
}

export default MyApp