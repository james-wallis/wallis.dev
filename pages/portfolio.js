import Layout from '../components/Layout.js';
import White from '../components/Sections/White';
import LightGrey from '../components/Sections/LightGrey';
import Portfolio from '../components/Portfolio/Grid';

const properties = {
  head: {
    title: 'James Wallis'
  },
  header: {
    h1: 'Portfolio',
    h2: 'Discover my projects',
    image: 'laptop-with-code.jpeg',
    height: 80
  }
}

const portfolio = [
  {
    name: 'artistjodi.co.uk',
    type: 'website',
    src: 'artistjodi.png',
    alt: 'A screenshot of the artistjodi.co.uk homepage',
    link: '/artistjodi'
  },
  {
    name: 'Dashboard',
    type: 'project',
    src: 'dashboard.png',
    alt: 'A screenshot of the dashboard',
    link: '/dashboard',
    comingSoon: true,
  },
  {
    name: 'wallisconsultancy.co.uk',
    type: 'website',
    src: 'wallisconsultancy.png',
    alt: 'A screenshot of the wallisconsultancy.co.uk homepage',
    link: '/wallisconsultancy',
    comingSoon: true,
  },
  {
    name: 'Web Fundamentals',
    type: 'coursework',
    src: 'webf1.png',
    alt: 'A screenshot of my web fundamental coursework homepage',
    link: '/webf1',
    comingSoon: true,
  },
  {
    name: 'brickbreaker',
    type: 'competition',
    src: 'brickbreaker.jpg',
    alt: 'A screenshot of my brickbreaker game made for a programming competition in first year',
    link: '/brickbreaker',
    comingSoon: true,
  },
]

export default class extends React.Component {
  render() {
    return <Layout {...properties} >
      <LightGrey>
        <h3>Take a look at my work</h3>
        <p>Ever since I discovered programming at university I've been pushing myself to develop in my free time.</p>
        <p>I've also been able to take on some websites as work.</p>
        <p>These are my projects.</p>
      </LightGrey>
      <Portfolio content={portfolio} />
      <style jsx>{`
        h3 {
          font-size: 26px;
          font-family: 'Oswald', sans-serif;
          letter-spacing: 2px;
          font-weight: 400;
          text-transform: uppercase;
          text-align: center;
          margin: 0;
          margin-bottom: 30px;
          // font-size: 35px;
        }
        p {
          font-size: 20px;
          font-weight: 200;
          font-family: 'Roboto', sans-serif;
          line-height: 30px;
          margin: 0;
          margin-bottom: 5px;
          text-align: justify;
          // text-align-last: center;
        }
      `}</style>
    </Layout>
  }
}