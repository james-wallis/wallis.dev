import React from 'react';
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
        para: 'I wanted to achieve two things while building this website. \
            The first was to gain experience developing and launching a website \
            myself, and the second was to create an online portfolio to help me \
            achieve a University placement. To achieve the second goal I ensured \
            that I had sections which highlighted my first year grades and projects \
            that I had completed and another section which contained details of work \
            experience that I had gained up to that point.',
        image: {
          text: 'The header section for my old personal website',
          src: 'oldwebsite-header.png',
          alt: 'A screenshot of my old personal website header'
        }
      },
      {
        title: 'Technical Details',
        para: 'As this was my first website and I wanted it to look good and function properly \
            without any bugs I opted to use a Bootstrap3 template. This meant that most of my development \
            time was spent adding HTML & CSS rather than any JavaScript. While using a template was a bit of a cheat in reflection, \
            the focus on HTML & CSS enabled me to gain a good foundation in Web development that I was able to use on my placement year \
            and in other projects such as this website and more using React.js',
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
        text: 'Demo of my old single-page website',
        src: 'oldwebsite.gif',
        alt: 'The whole website as a gif'
      }
    }
  }
}

export default class extends React.Component {
  render() {
    return <Portfolio {...properties} />
  }
}
