import Layout from '../../components/Layouts/Main';
import Portfolio from '../../components/Sections/Portfolio.js';
import LightGrey from '../../components/Sections/LightGrey.js';
import Button from '../../components/Button';

const properties = {
  head: {
    title: 'Portfolio - Web Foundations University Coursework',
    description: 'Web Foundations First Year University Coursework designed and built by James Wallis, find out more here.'
  },
  header: {
    h1: 'Web Foundations',
    h2: 'Electronic Portfolio',
    image: 'webf1.png',
    imagePosition: 'top',
    height: 80
  }
}

export default class extends React.Component {
  render() {
    return <Layout {...properties} >
      <LightGrey className='container'>
        <h3>About the Coursework</h3>
        <p>
          The Web Foundations coursework is designed to act as an electronic
          portfolio of all the work completed during the first year unit. 
          Using the portfolio, the marker is able to guage how well a student 
          has understood the tasks given to them each week.
        </p>
      </LightGrey>
      <Portfolio>
        <div className='col'>
          <h4>Task</h4>
          <p>
            Much hard
          </p>
        </div>
        <div className='col col-img'>
          <img src={require('../../images/portfolio/webf1/webf1-home.png')} alt='A screenshot of the web foundations coursework index page' />
          <p>The index page for the Web Foundations coursework</p>
        </div>
      </Portfolio>
      <Portfolio border>
        <div className='col col-img'>
          <img src={require('../../images/portfolio/webf1/webf1-work-log.png')} alt='A screenshot of the web foundations coursework work log page' />
          <p>The Work Log page</p>
        </div>
        <div className='col'>
          <h4>Technical Details</h4>
          <p>
            Many deets
          </p>
        </div>
      </Portfolio>
      <Portfolio border>
        <div className='col'>
          <h4>View the electronic portfolio</h4>
          <Button href='/static/projects/webf1/index.html' external>
            index.html
          </Button>
        </div>
        <div className='col col-img'>
          <img src={require('../../images/portfolio/webf1/webf1-media.png')} alt='A screenshot of the web foundations coursework media page' />
          <p>The media page</p>
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