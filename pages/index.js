import Layout from '../components/Layouts/Main'
import White from '../components/Sections/White';
import LightGrey from '../components/Sections/LightGrey';
import Portfolio from '../components/Portfolio/Grid';
import FixedSocial from '../components/FixedSocial';

const properties = {
  head: {
    title: 'Home',
    description: 'The personal website for James Wallis, developer.'
  },
  header: {
    h1: 'James Wallis',
    h2: 'Developer',
    image: 'me-on-beach.jpg',
    height: 100
  },
  animate: true,
  home: true
}

const portfolio = [
  {
    name: 'artistjodi.co.uk',
    type: 'website',
    src: 'artistjodi/artistjodi-home.png',
    alt: 'A screenshot of the artistjodi.co.uk homepage',
    link: '/artistjodi'
  },
  {
    name: 'Dashboard',
    type: 'project',
    src: 'dashboard/home.png',
    alt: 'A screenshot of the dashboard',
    link: '/dashboard',
    comingSoon: true,
  },
  {
    name: 'wallisconsultancy.co.uk',
    type: 'website',
    src: 'wallisconsultancy/wallisconsultancy-home.png',
    alt: 'A screenshot of the wallisconsultancy.co.uk homepage',
    link: '/wallisconsultancy',
  },
  {
    name: 'Web Fundamentals',
    type: 'coursework',
    src: 'webf1/home.png',
    alt: 'A screenshot of my web fundamental coursework homepage',
    link: '/webf1',
    comingSoon: true,
  },
  {
    name: 'brickbreaker',
    type: 'competition',
    src: 'brickbreaker/game-and-source.jpg',
    alt: 'A screenshot of my brickbreaker game made for a programming competition in first year',
    link: '/brickbreaker',
    comingSoon: true,
  },
]

export default class extends React.Component {

  static async getInitialProps({ query }) {
    return { query: query }
  }

  render() {
    const { query } = this.props;
    properties.elementToScrollTo = (query.section) ? query.section : null;
    return <Layout {...properties} >
      <FixedSocial animate />
      <div id='about' className='section'>
        <LightGrey>
          <h3>Let me introduce myself</h3>
          <p>I'm 22, studying Computer Science at the University of Portsmouth and recently finished my placement year at IBM.</p>
          {/* <p>Oh and I love coffee as much as the next developer.</p> */}
        </LightGrey>
        <White>
          <h3>Technology &amp; personal development</h3>
          <p>
            <strong>1996 - 2015</strong> 
            Built my first computer and was introduced to HTML and CSS during high school and began developing my own websites.
            Worked as an English and Maths tutor at Kumon and as a Waiter at a local bistro.
          </p>
          <p>
            <strong>2015 - 2019</strong> 
            Attended the University of Portsmouth where I was introduced to development languages such as JavaScript, Java and Python. 
            In addition to completing my Computer Science degree I also became a Placement Ambassador.
          </p>
          <p>
            <strong>2019 - Present</strong> 
            Currently working in a local bistro passing time before starting at IBM in September.
          </p>
        </White>
      </div>
      <div id='portfolio' className='section'>
        <LightGrey>
          <h3>Take a look at my work</h3>
          <p>Ever since I discovered programming at university I've been pushing myself to develop in my free time.</p>
          <p>I've also been able to take on some websites as work.</p>
          <p>These are my projects.</p>
        </LightGrey>
        <Portfolio content={portfolio} />
      </div>
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
        }
        p {
          font-size: 16px;
          font-weight: 200;
          font-family: 'Roboto', sans-serif;
          line-height: 30px;
          margin: 0;
          margin-bottom: 5px;
          text-align: justify;
        }
        strong {
          padding-right: 10px;
        }
      `}</style>
    </Layout>
  }

  componentDidMount() {
    window.Cookies = require('js-cookie');
    const cookieFound = Cookies.getJSON('wallis.devs');
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
      const fixedSocial = document.getElementById('fixed-social');
      fixedSocial.classList.remove('animated');
      fixedSocial.classList.remove('fadeInUp');
    }

    const hideFixedSocial = this.hideFixedSocial;
    document.addEventListener('scroll', hideFixedSocial);
  }

  componentWillUnmount() {
    const hideFixedSocial = this.hideFixedSocial;
    document.removeEventListener('scroll', hideFixedSocial);
  }

  hideFixedSocial = () => {
    const aboutSection = document.getElementById('about').offsetTop;
    const fixedSocial = document.getElementById('fixed-social');
    if (window.scrollY > aboutSection) {
      fixedSocial.style.visibility = 'hidden';
    } else {
      fixedSocial.style.visibility = 'visible';
    }
  }
}