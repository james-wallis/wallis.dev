import Layout from '../../components/Layouts/Main';
import Portfolio from '../../components/Sections/Portfolio.js';
import LightGrey from '../../components/Sections/LightGrey.js';
import Button from '../../components/Button';

const properties = {
  head: {
    title: 'Portfolio - Wallis Consultancy',
    description: 'Wallis Consultancy is a website designed and built by James Wallis, find out more here.'
  },
  header: {
    h1: 'Wallis Consultancy',
    h2: 'Website',
    image: 'wallisconsultancy.png',
    imagePosition: 'top',
    height: 80
  }
}

export default class extends React.Component {
  render() {
    return <Layout {...properties} >
      <LightGrey className='container'>
        <h3>About Wallis Consultancy</h3>
        <p>
          Mike Wallis is a retired senior banker with professional 
          qualifications and experience in both personal and business banking.
          He is also my Dad. Mike runs a claims management company from home in 
          his spare time 
        </p>
      </LightGrey>
      <Portfolio>
        <div className='col'>
          <h4>Task</h4>
          <p>
            The original Wallis Consultancy website was made ~10 years ago by
            an older sibling. This led Mike to want the website revamped 
            and updated to bring it to the standard of his competitors. He gave me 
            instructions that he wanted the site to be clean and well laid out and 
            easy for me to maintain in the future. After researching different competitors
            current designs and receiving the content from Mike, I began work on the project.
            The Wallis Consultancy website was completed over the summer of 2016 and was
            my first experience with web development for someone but myself.
          </p>
        </div>
        <div className='col col-img'>
          <img src={require('../../images/portfolio/wallisconsultancy/wallisconsultancy-home.png')} alt='A screenshot of the wallisconsultancy.co.uk homepage' />
          <p>The homepage for wallisconsultancy.co.uk</p>
        </div>
      </Portfolio>
      <Portfolio border>
        <div className='col col-img'>
          <img src={require('../../images/portfolio/wallisconsultancy/wallisconsultancy-faq.png')} alt='A screenshot of the wallisconsultancy.co.uk commissions page' />
          <p>The FAQ page</p>
        </div>
        <div className='col'>
          <h4>Technical Details</h4>
          <p>
           I wrote wallisconsultancy.co.uk in plain HTML &amp; CSS using PHP 
           includes to make a simple templating system so I would only write 
           one navigation section and so on. For the design I used a Bootstrap3 
           template and then my HTML &amp; CSS skills to tweak it to Mike's 
           specifications. The form submission is achieved through PHP and the confirmation
           emails sent using PHP Mailer, code inherited from the older sibling mentioned 
           earlier and modified for the new layout/features. 
          </p>
        </div>
      </Portfolio>
      <Portfolio border>
        <div className='col'>
          <h4>Visit wallisconsultancy.co.uk</h4>
          <Button href='http://wallisconsultancy.co.uk' external>
            wallisconsultancy.co.uk
          </Button>
        </div>
        <div className='col col-img'>
          <img src={require('../../images/portfolio/wallisconsultancy/wallisconsultancy-footer.png')} alt='A screenshot of the footer for wallisconsultancy.co.uk' />
          <p>The wallisconsultancy.co.uk footer</p>
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