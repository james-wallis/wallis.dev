import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react';

import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
    const url: string = `https://wallis.dev${router.route}`;

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    });

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