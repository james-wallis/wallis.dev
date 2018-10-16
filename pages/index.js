import Head from 'next/head'
import Background from '../components/Background';
import Navigation from '../components/Navigation';
import Headings from '../components/Header';
import FixedSocial from '../components/FixedSocial';

const properties = {
  head: {
    title: 'James Wallis'
  },
  header: {
    h1: 'James Wallis',
    h2: 'Developer',
    image: 'macbook-pro-on-desk.jpeg',
    height: 100
  }
}

export default class extends React.Component {
  render() {
    return <div className='container'>
      <Head>
        <title>{properties.head.title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-9ralMzdK1QYsk4yBY680hmsb4/hJ98xK3w0TIaJ3ll4POWpWUYaA2bRjGGujGT8w" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/static/css/animate.min.css" />
      </Head>
      <Background height={properties.header.height} image={properties.header.image} />
      <Navigation animate/>
      <Headings animate h1={properties.header.h1} h2={properties.header.h2} height={properties.header.height} />
      <FixedSocial animate />
      <style global jsx>{`
       html, body {
          background: #26262a;
          padding: 0;
          margin: 0;
          font-family: 'Roboto', sans-serif;
          color: white;
          overflow: hidden;
        }
      `}</style>
    </div>
  }

  componentDidMount() {
    window.Cookies = require('js-cookie');
    const cookieFound = Cookies.getJSON('james-wallis.com');
    if (cookieFound) {
      const headings = document.getElementsByClassName('headings')[0].childNodes;
      for (let index = 0; index < headings.length; index++) {
        const element = headings[index];
        element.classList.remove('animated');
        element.classList.remove('fadeIn');
      }
      const nav = document.getElementsByTagName('NAV')[0];
      nav.classList.remove('animated');
      nav.classList.remove('fadeInDown');
      const footer = document.getElementsByClassName('fixed-social')[0];
      footer.classList.remove('animated');
      footer.classList.remove('fadeInUp');
    } else {
      // If cookie isn't found create it
      const inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
      Cookies.set('james-wallis.com', true, { expires: inFiveMinutes });
    }
  }
}