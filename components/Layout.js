import Head from 'next/head'
import Background from './Background';
import Navigation from './Navigation';
import Headings from './Header';
import Footer from './Footer';



class Layout extends React.Component {
  render() {
    return <div className='container'>
      <Head>
        <title>{this.props.head.title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-9ralMzdK1QYsk4yBY680hmsb4/hJ98xK3w0TIaJ3ll4POWpWUYaA2bRjGGujGT8w" crossorigin="anonymous"/>
        <link rel="stylesheet" href="/static/css/animate.min.css" />
      </Head>
      <Background height={this.props.header.height} image={this.props.header.image}/>
      <Navigation />
      <Headings h1={this.props.header.h1} h2={this.props.header.h2} height={this.props.header.height}/>
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
    window.Rellax = require('rellax');
    new Rellax('.rellax');
  }
}

export default Layout