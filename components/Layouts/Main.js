import Head from '../../node_modules/next/head'
import Background from '../Background';
import Navigation from '../Navigation/Main';
import Headings from '../Header';
import Footer from '../Footer';
import { animateScroll as scroll } from 'react-scroll'
import NextSeo from 'next-seo'

class Layout extends React.Component {
  render() {
    return <div className='container'>
      <NextSeo
        config={{
          title: this.props.head.title,
          description: this.props.head.description,
        }}
      />
      <Background height={this.props.header.height} image={this.props.header.image} imagePosition={this.props.header.imagePosition}/>
      <Navigation animate={this.props.animate} home={this.props.home} />
      <Headings animate={this.props.animate} h1={this.props.header.h1} h2={this.props.header.h2} height={this.props.header.height}/>
      {this.props.children}
      <Footer />
      <style global jsx>{`
        html, body {
          background: #26262a;
          padding: 0;
          margin: 0;
          font-Family: 'Muli',Sans-Serif;
          color: white;
        }
        .container {
          position: relative;
        }
      `}</style>
    </div>
  }

  componentDidMount() {
    window.Rellax = require('../../node_modules/rellax');
    new Rellax('.rellax');
    window.Cookies = require('../../node_modules/js-cookie');
    // Create cookie, if its created add 5 minutes to expiry time
    // Wait 10 seconds to ensure animation can finish if it has started
    setTimeout(() => {
      const inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
      Cookies.set('wallis.devs', true, { expires: inFiveMinutes });
    }, 10000);
    if (this.props.elementToScrollTo) {
      const nav = document.getElementsByTagName('nav')[0];
      const el = document.getElementById(this.props.elementToScrollTo);
      const px = el.offsetTop;
      const offset = (-(nav.offsetHeight) + 1);
      scroll.scrollTo(px + offset);
    }
  }
}

export default Layout
