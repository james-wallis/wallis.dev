import Head from '../../node_modules/next/head'
import Background from '../Background';
import Navigation from '../Navigation/Main';
import Headings from '../Header';
import Footer from '../Footer';



class Layout extends React.Component {
  render() {
    return <div className='container'>
      <Head>
        <title>{this.props.head.title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="icon" href="/static/favicon.png" type="image/png"></link>
        <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300" rel="stylesheet"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-9ralMzdK1QYsk4yBY680hmsb4/hJ98xK3w0TIaJ3ll4POWpWUYaA2bRjGGujGT8w" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="/static/css/animate.min.css" />
      </Head>
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
          font-family: 'Roboto', sans-serif;
          color: white;
        }
      `}</style>
    </div>
  }

  componentDidMount() {
    window.Rellax = require('../../node_modules/rellax');
    new Rellax('.rellax');
    window.Cookies = require('../../node_modules/js-cookie');
    // Create cookie, if its created add 5 minutes to expiry time
    const inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
    Cookies.set('wallis.dev', true, { expires: inFiveMinutes });
  }
}

export default Layout