import Portfolio from '../../components/Layouts/PortfolioPage';

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
  },
  page: {
    title: 'About my old website',
    desc: 'During my first year at the University of Portsmouth I completed \
          activities and coursework which enabled me to improve my programming ability \
          and web development skills. \
          To further develop and showcase this new knowledge I created a personal website \
          which is designed to act as an interactive CV. The website helped me to achieve \
          a University placement at IBM.',
    imgFolder: 'oldwebsite',
    sections: [
      {
        title: 'Task',
        para: 'Information Coming Soon.',
        image: {
          text: 'The header section for my old personal website',
          src: 'oldwebsite-header.png',
          alt: 'A screenshot of my old personal website header'
        }
      },
      {
        title: 'Technical Details',
        para: 'Information Coming Soon.',
        image: {
          text: 'Showcasing first year work completed at the University of Portsmouth',
          src: 'oldwebsite-university-work.png',
          alt: 'A screenshot of my old personal website university work section'
        }
      }
    ],
    finalSection: {
      title: 'Visit my old website',
      link: 'https://old.wallis.dev',
      text: 'old.wallis.dev',
      image: {
        text: 'The resume section detailing my education and work experience',
        src: 'oldwebsite-resume.png',
        alt: 'The resume section of my old personal website'
      }
    }
  }
}

export default class extends React.Component {
  render() {
    return <Portfolio {...properties} />
  }
}