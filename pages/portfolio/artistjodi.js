import Portfolio from '../../components/Layouts/PortfolioPage';

const properties = {
  head: {
    title: 'Portfolio - Artist Jodi',
    description: 'ArtistJodi is a website developed by James Wallis using React and Nextjs, find out more here.'
  },
  header: {
    h1: 'ArtistJodi',
    h2: 'Website',
    image: 'artistjodi.png',
    imagePosition: 'top',
    height: 80
  },
  page: {
    title: 'About ArtistJodi',
    desc: 'Jodi specialises in Resin and Acrylic art. \
          Her career has spanned over 20 years and she has sold her art \
          across Europe, Japan, Egypt, America, Singapore and widely \
          throughout the UK. After creating art with acrylics over \
          many years, Jodi has recently begun a new adventure using resin art. \
          With resin Jodi is able to create a range of art from splashbacks \
          to personalised snowboards. Jodi asked me to create a platform which \
          she can use to share her art with the world.',
    imgFolder: 'artistjodi',
    sections: [
      {
        title: 'Task',
        para: 'As an artist, Jodi had already designed her website before asking \
            me to take on the website. It was designed in such a way that would \
            be both user friendly, show off her personality and most importantly \
            focus on the art. After our first discussion, it was clear that \
            Jodi wanted me to ensure the website was quick, had a great user experience \
            and that it was SEO friendly. I was given the various page designs, an artistic license \
            and then set about planning and developing the website.',
        image: {
          text: 'The homepage for artistjodi.com',
          src: 'artistjodi-home.png',
          alt: 'A screenshot of the artistjodi.com homepage'
        }
      },
      {
        title: 'Technical Details',
        para: 'I chose to write artistjodi.com in React.js using Next.js framework as the server side \
              rendering is a perfect for fast page loading time and strong SEO. For fast image load time, \
              I use a Next.js plugin to compress the images. \
              Bootstrap 4 is used to get the responsive layout and font-awesome for icons \
              that are not designed by Jodi. No templating is used for the page structure as in \
              order to stay true to Jodi\'s initial design. \
              The site is setup to do an automatic HTTPS redirect and scores highly on Google lighthouse.',
        image: {
          text: 'The commissions page for artistjodi.com',
          src: 'artistjodi-commissions.png',
          alt: 'A screenshot of the artistjodi.com commissions page'
        }
      }
    ],
    finalSection: {
      title: 'Visit ArtistJodi.com',
      link: 'https://artistjodi.com',
      text: 'artistjodi.com',
      image: {
        text: 'The Art Splashbacks section of the website',
        src: 'artistjodi-artsplashbacks.png',
        alt: 'A screenshot of the Art Splashbacks section of artistjodi.com'
      }
    }
  }
}

export default class extends React.Component {
  render() {
    return <Portfolio {...properties} />
  }
}