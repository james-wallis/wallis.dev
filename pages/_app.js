import App, { Container } from 'next/app';
import React from 'react';
import NextSeo from 'next-seo';
import Head from '../node_modules/next/head'

// import your default seo configuration
import SEO from '../next-seo.config'

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
      <Container>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="icon" href="/static/favicon.png" type="image/png"></link>
          <link href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300" rel="stylesheet" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-9ralMzdK1QYsk4yBY680hmsb4/hJ98xK3w0TIaJ3ll4POWpWUYaA2bRjGGujGT8w" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/static/css/animate.min.css" />
        </Head>
        <NextSeo config={SEO} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
