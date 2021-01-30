import React from 'react';
import Portfolio from '../../components/Layouts/PortfolioPage';

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
  },
  page: {
    title: 'About the coursework',
    desc: 'The Web Foundations coursework is designed to act as an electronic \
          portfolio of all the work completed during the first year unit. \
          Using the portfolio, the marker is able to guage how well a student \
          has understood the tasks given to them each week.',
    imgFolder: 'webf1',
    sections: [
      {
        title: 'Task',
        para: 'Information Coming Soon.',
        image: {
          text: 'The index page for the Web Foundations coursework',
          src: 'webf1-home.png',
          alt: 'A screenshot of the web foundations coursework index page'
        }
      },
      {
        title: 'Technical Details',
        para: 'Information Coming Soon.',
        image: {
          text: 'The Work Log page',
          src: 'webf1-work-log.png',
          alt: 'A screenshot of the web foundations coursework work log page'
        }
      }
    ],
    finalSection: {
      title: 'View the electronic portfolio',
      link: '/static/projects/webf1/index.html',
      text: 'index.html',
      image: {
        text: 'The media page',
        src: 'webf1-media.png',
        alt: 'A screenshot of the web foundations coursework media page'
      }
    }
  }
}

export default class extends React.Component {
  render() {
    return <Portfolio {...properties} />
  }
}