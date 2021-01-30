import React, { useEffect } from 'react';
import Layout from '../components/Layouts/Main'
import LightGrey from '../components/Sections/LightGrey';
import White from '../components/Sections/White';
import Portfolio from '../components/Portfolio/Grid';
import FixedSocial from '../components/FixedSocial';
import Blog from '../components/Blog';

import { useRouter } from 'next/router';
import { getAllArticles } from '../lib/devto';

const properties = {
  head: {
    title: 'Home',
    description: 'The personal website for James Wallis, developer.'
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
    date: 2018,
    ongoing: true,
    src: 'artistjodi/artistjodi-home.png',
    alt: 'A screenshot of the artistjodi.co.uk homepage',
    link: '/artistjodi'
  },
  // {
  //   name: 'Dashboard',
  //   type: 'project',
  //   date: 2018,
  //   src: 'dashboard/home.png',
  //   alt: 'A screenshot of the dashboard',
  //   link: '/dashboard',
  //   comingSoon: true,
  // },
  // {
  //   name: 'admin',
  //   type: 'project',
  //   date: 2017,
  //   src: 'admin/admin-dashboard.png',
  //   alt: 'A screenshot of the admin dashboard',
  //   link: '/admin',
  //   comingSoon: true
  // },
  {
    name: 'wallisconsultancy.co.uk',
    type: 'website',
    date: 2016,
    ongoing: true,
    src: 'wallisconsultancy/wallisconsultancy-home.png',
    alt: 'A screenshot of the wallisconsultancy.co.uk homepage',
    link: '/wallisconsultancy',
  },
  // {
  //   name: 'Old personal website',
  //   type: 'website',
  //   date: 2016,
  //   src: 'oldwebsite/oldwebsite-header.png',
  //   alt: 'Old previous website header',
  //   link: '/oldwebsite',
  // },
  // {
  //   name: 'Web Fundamentals',
  //   type: 'coursework',
  //   date: 2015,
  //   src: 'webf1/webf1-home.png',
  //   alt: 'A screenshot of my web fundamental coursework homepage',
  //   link: '/webf1',
  //   comingSoon: true
  // },
  {
    name: 'Blockbreaker',
    type: 'competition',
    date: 2015,
    src: 'blockbreaker/game-and-source.jpg',
    alt: 'A screenshot of my Blockbreaker game made for a programming competition in first year',
    link: '/blockbreaker',
  },
]

const hideFixedSocial = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const fixedSocial = document.getElementById('fixed-social');
    if (window.scrollY > aboutSection.offsetTop) {
      fixedSocial.style.visibility = 'hidden';
    } else {
      fixedSocial.style.visibility = 'visible';
    }
  }
}

const HomePage = ({ articles }) => {
  const { query } = useRouter();

  properties.elementToScrollTo = (query.section) ? query.section : null;

  useEffect(() => {
    window.Cookies = require('js-cookie');
    const cookieFound = Cookies.getJSON('wallis.devs');
    if (cookieFound) {
      const headings = document.getElementsByClassName('headings')[0].childNodes;
      for (let index = 0; index < headings.length; index++) {
        const element = headings[index];
        element.classList.remove('animated');
        element.classList.remove('fadeIn');
      }
      const nav = document.getElementsByTagName('NAV')[0];
      nav.classList.remove('animated');
      nav.classList.remove('fadeInDown');
      const fixedSocial = document.getElementById('fixed-social');
      fixedSocial.classList.remove('animated');
      fixedSocial.classList.remove('fadeInUp');
    }

    document.addEventListener('scroll', hideFixedSocial);

    return () => {
      document.removeEventListener('scroll', hideFixedSocial);
    };
  }, [])


  return <Layout {...properties} >
    <FixedSocial animate />
    <div id='about' className='section'>
      <LightGrey>
        <h3>About me</h3>
        <p>Software Developer @ IBM</p>
        <p>Computer Science @ University of Portsmouth</p>
      </LightGrey>
    </div>
    <div id='portfolio' className='section'>
      <Portfolio content={portfolio} />
    </div>
    <div id='blog' className='section'>
      <LightGrey>
        <Blog articles={articles} />
      </LightGrey>
    </div>
  <style jsx>{`
      h3 {
        font-Family: 'Merriweather', Serif;
        font-Size: 35px;
        letter-spacing: 1px;
        font-weight: 400;
        text-align: center;
        margin: 0;
        margin-bottom: 30px;
      }
      p {
        font-size: 16px;
        font-weight: 200;
        font-Family: 'Muli', Sans-Serif;
        line-height: 30px;
        margin: 0;
        margin-bottom: 5px;
        text-align: center;
      }
      strong {
        padding-right: 10px;
      }
    `}</style>
  </Layout>
}

export async function getStaticProps() {
  // Get all the articles that have a canonical URL pointed to your blog
  const articles = await getAllArticles();

  // Pass articles to the page via props
  return { props: { articles } };
}

export default HomePage;