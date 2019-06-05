import Portfolio from '../../components/Layouts/PortfolioPage';

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
  },
  page: {
    title: 'About Wallis Consultancy',
    desc: 'Mike Wallis is a retired senior banker with professional \
          qualifications and experience in both personal and business banking. \
          He is also my Dad. Mike runs a claims management company from home in \
          his spare time',
    imgFolder: 'wallisconsultancy',
    sections: [
      {
        title: 'Task',
        para: 'The original Wallis Consultancy website was made ~10 years ago by \
            an older sibling. This led Mike to want the website revamped \
            and updated to bring it to the standard of his competitors. He gave me \
            instructions that he wanted the site to be clean and well laid out and \
            easy for me to maintain in the future. After researching different competitors \
            current designs and receiving the content from Mike, I began work on the project. \
            The Wallis Consultancy website was completed over the summer of 2016 and was \
            my first experience with web development for someone but myself.',
        image: {
          text: 'The homepage for wallisconsultancy.co.uk',
          src: 'wallisconsultancy-home.png',
          alt: 'A screenshot of the wallisconsultancy.co.uk homepage'
        }
      },
      {
        title: 'Technical Details',
        para: 'I wrote wallisconsultancy.co.uk in plain HTML & CSS using PHP \
            includes to make a simple templating system so I would only write \
            one navigation section and so on. For the design I used a Bootstrap3 \
            template and then my HTML & CSS skills to tweak it to Mike\'s \
            specifications. The form submission is achieved through PHP and the confirmation \
            emails sent using PHP Mailer, code inherited from the older sibling mentioned \
            earlier and modified for the new layout/features.',
        image: {
          text: 'The FAQ page for wallisconsultancy.co.uk',
          src: 'wallisconsultancy-faq.png',
          alt: 'A screenshot of the wallisconsultancy.co.uk FAQ page'
        }
      }
    ],
    finalSection: {
      title: 'Visit wallisconsultancy.co.uk',
      link: 'https://wallisconsultancy.co.uk',
      text: 'wallisconsultancy.co.uk',
      image: {
        text: 'The wallisconsultancy.co.uk footer',
        src: 'wallisconsultancy-footer.png',
        alt: 'A screenshot of the footer for wallisconsultancy.co.uk'
      }
    }
  }
}

export default class extends React.Component {
  render() {
    return <Portfolio {...properties} />
  }
}