import App from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import Head from '../node_modules/next/head'

const url = 'https://wallis.dev'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="icon" href="/static/favicon.png" type="image/png"></link>
          <link href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300" rel="stylesheet" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-9ralMzdK1QYsk4yBY680hmsb4/hJ98xK3w0TIaJ3ll4POWpWUYaA2bRjGGujGT8w" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/static/css/animate.min.css" />
        </Head>
        <DefaultSeo
          titleTemplate='James Wallis | %s'
          openGraph={{
            url,
            title: 'James Wallis',
            description: 'The personal website for James Wallis, developer.',
            site_name: 'wallis.dev',
          }}
          canonical={url}
        />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
