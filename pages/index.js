import Layout from '../components/Layouts/Main'
import White from '../components/Sections/White';
import LightGrey from '../components/Sections/LightGrey';
import Portfolio from '../components/Portfolio/Grid';
import FixedSocial from '../components/FixedSocial';

const properties = {
  head: {
    title: 'James Wallis'
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
  render() {
    return <Layout {...properties} >
      <FixedSocial animate />
      <div id="about">
        <LightGrey>
          <h3>Let me introduce myself</h3>
          <p>I'm 21, born in Hertfordshire, living in Portsmouth, studying Computer Science and just finished my placement year at IBM.</p>
          <p>Oh and I love coffee as much as the next developer.</p>
        </LightGrey>
        <White>
          <h3>Technology &amp; development</h3>
          <p><strong>Pre-code:</strong> At 12 I helped my older brother build my first computer which sparked my passion for technology.</p>
          <p><strong>Secondary School:</strong> I was introduced to HTML &amp; CSS and began developing my own websites.</p>
          <p><strong>University of Portsmouth:</strong> I was introduced to development languages such as JavaScript, Java and Python.</p>
          <p><strong>IBM:</strong> I honed my JavaScript skills, learnt Bash programming and was introduced to Docker Containerisation and Kubernetes Orchestration.</p>
        </White>
        <White border>
          <h3>Working life</h3>
          <p><strong>Secondary School:</strong> Worked as an instructor at my local Kumon centre and as a kitchen porter then waiter at Martin's Pond.</p>
          <p><strong>University of Portsmouth:</strong> During 2nd year worked for Deliveroo. Now in my final year I am working as an Placement Ambassador for the university.</p>
          <p><strong>IBM:</strong> Spent a year at IBM on placement where I worked in an agile team on Microclimate.</p>
          <p><strong>Casual Work:</strong> Developed and maintain artistjodi.co.uk and wallisconsultancy.co.uk. Work at SalsaMish on an "on call" basis.</p>
        </White>
      </div>
      <div id='portfolio'>
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
          // text-align-last: center;
        }
      `}</style>
    </Layout>
  }
}