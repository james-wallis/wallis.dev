import Layout from '../../components/Layouts/Main';
import Portfolio from '../../components/Sections/Portfolio.js';
import LightGrey from '../../components/Sections/LightGrey.js';
import Button from '../../components/Button';

const properties = {
  head: {
    title: 'Portfolio - Old personal website',
    description: 'My first personal website designed and built by James Wallis with the help of a Boostrap3 template, find out more here.'
  },
  header: {
    h1: 'Previous website',
    h2: 'website',
    image: 'oldwebsite.png',
    imagePosition: 'top',
    height: 80
  }
}

export default class extends React.Component {
  render() {
    return <Layout {...properties} >
      <LightGrey className='container'>
        <h3>About my old website</h3>
        <p>
          During my first year at the University of Portsmouth I completed 
          activities and coursework which enabled me to improve my programming ability 
          and web development skills.
          To further develop and showcase this new knowledge I created a personal website 
          which is designed to act as an interactive CV. The website helped me to achieve 
          a University placement at IBM.
        </p>
      </LightGrey>
      <Portfolio>
        <div className='col'>
          <h4>Task</h4>
          <p>
            Information Coming Soon.
          </p>
        </div>
        <div className='col col-img'>
          <img src={require('../../images/portfolio/oldwebsite/oldwebsite-header.png')} alt='A screenshot of my old personal website header' />
          <p>The header section for my old personal website</p>
        </div>
      </Portfolio>
      <Portfolio border>
        <div className='col col-img'>
          <img src={require('../../images/portfolio/oldwebsite/oldwebsite-university-work.png')} alt='A screenshot of my old personal website university work section' />
          <p>Showcasing first year work completed at the University of Portsmouth</p>
        </div>
        <div className='col'>
          <h4>Technical Details</h4>
          <p>
            Information Coming Soon.
          </p>
        </div>
      </Portfolio>
      <Portfolio border>
        <div className='col'>
          <h4>Visit my old website</h4>
          <Button href='https://old.wallis.dev' external>
            old.wallis.dev
          </Button>
        </div>
        <div className='col col-img'>
          <img src={require('../../images/portfolio/oldwebsite/oldwebsite-resume.png')} alt='The resume section of my old personal website' />
          <p>The resume section detailing my education and work experience</p>
        </div>
      </Portfolio>
      <style jsx>{`
        .col {
          width: 100%;
          padding: 0 10px;
          order: 1;
        }
        .col-img {
          order: 2;
          margin-top: 30px;
        }
        .col-img p {
          text-align: center;
        }
        img {
          width: 100%;
          position: 1;
        }
        h3, h4 {
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
          font-size: 16px;
          font-weight: 200;
          font-family: 'Roboto', sans-serif;
          line-height: 30px;
          margin: 0;
          margin-bottom: 5px;
          text-align: justify;
          // text-align-last: center;
        }
        @media (min-width: 992px) {
            .col {
              width: 50%;
              order: unset;
            }
            .col-img {
              order: unset;
              margin-top: 0;
            }
          }
      `}</style>
    </Layout>
  }
}