import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react';

import '../styles/globals.css'
import 'highlight.js/styles/railscasts.css';

declare const window: any;

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
    window.gtag('event', name, {
        event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
        value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
        event_label: id, // id unique to current page load
        non_interaction: true, // avoids affecting bounce rate.
    })
  }

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