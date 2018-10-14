import Layout from '../../components/Layout.js';
import Portfolio from '../../components/Sections/Portfolio.js';
import LightGrey from '../../components/Sections/LightGrey.js';

const properties = {
  head: {
    title: 'James Wallis'
  },
  header: {
    h1: 'ArtistJodi.co.uk',
    h2: 'Website',
    image: 'portfolio/artistjodi.png',
    imagePosition: 'top',
    height: 80
  }
}

export default class extends React.Component {
  render() {
    return <Layout {...properties} >
      <LightGrey className='container'>
        <h3>About ArtistJodi</h3>
        <p>
          Jodi specialises in Resin and Acrylic art. 
          Her career has spanned over 20 years and she has sold her art 
          across Europe, Japan, Egypt, America, Singapore and widely 
          throughout the UK. After creating art with acrylics over 
          many years, Jodi has recently begun a new adventure using resin art.
          With resin Jodi is able to create a range of art from splashbacks 
          to personalised snowboards. Jodi asked me to create a platform which
          she can use to share her art with the world. 
        </p>
      </LightGrey>
      <Portfolio>
        <div className='col'>
          <h4>Task</h4>
          <p>
            As an artist, Jodi had already designed her website before asking 
            me to take on the website. It was designed in such a way that would 
            be both user friendly, show off her personality and most importantly 
            focus on the art. After our first discussion, it was clear that 
            Jodi wanted me to ensure the website was quick, had a great user experience
            and that it was SEO friendly. I was given the various page designs, an artistic license 
            and then set about planning and developing the website.
          </p>
        </div>
        <div className='col'>
          <img src={'/static/portfolio/artistjodi.png'} alt='The artistjodi.co.uk homepage' />
        </div>
      </Portfolio>
      <Portfolio border>
        <div className='col'>
          <img src={'/static/portfolio/artistjodi-commissions.png'} alt='something' />
        </div>
        <div className='col'>
          <h4>Technical Details</h4>
          <p>
            I chose to write artistjodi.co.uk in React.js using Next.js framework as the server side 
            rendering is a perfect for fast page loading time and strong SEO. For fast image load time, 
            I use a Next.js plugin to compress the images.
            Bootstrap 4 is used to get the responsive layout and font-awesome for icons 
            that are not designed by Jodi. No templating is used for the page structure as in 
            order to stay true to Jodi's initial design.
            The site is setup to do an automatic HTTPS redirect and scores highly on Google lighthouse.
          </p>
        </div>
      </Portfolio>
      <Portfolio border>
        <div className='col'>
          <h4>Visit ArtistJodi.co.uk</h4>
          <p></p>
        </div>
        <div className='col'>
          <img src={'/static/portfolio/artistjodi.png'} alt='The artistjodi.co.uk homepage' />
        </div>
      </Portfolio>
      <style jsx>{`
        .col {
          width: 50%;
          padding: 0 10px;
        }
        img {
          width: 100%;
          
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