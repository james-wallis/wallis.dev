import React from 'react';
import { Link } from 'react-scroll';
import ReactResizeDetector from 'react-resize-detector';
import MenuIcon from './MenuIcon';
import func from './navigationFunctions';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarOffset: 0
    }
  }
  render() {
    const { navBarOffset } = this.state;
    return <nav className={(this.props.animate ? 'animated fadeInDown' : null)} onScroll={func.toggleNavigationBackground}>
      <h2 className='nav-name'>James Wallis</h2>
      <ReactResizeDetector handleWidth handleHeight onResize={this.setNavBarOffset} />
      <MenuIcon onClick={func.openMenu} />
      <ul onMouseOver={func.dimNavigation} onMouseOut={func.showNavigation}>
        <MenuIcon close onClick={func.closeMenu} />
        <li className='section-link'>
          <Link onMouseOut={func.removeHover} to='__next' spy={true} smooth={'easeInOutCubic'} duration={500} onSetActive={func.closeMenu}>
            Home
          </Link>
        </li>
        <li className='section-link'>
          <Link onMouseOut={func.removeHover} to='about' spy={true} smooth={'easeInOutCubic'} offset={navBarOffset} duration={500} onSetActive={func.closeMenu}>
            About
          </Link>
        </li>
        <li className='section-link'>
          <Link onMouseOut={func.removeHover} to='portfolio' spy={true} smooth={'easeInOutCubic'} offset={navBarOffset} duration={500} onSetActive={func.closeMenu}>
            Portfolio
          </Link>
        </li>
        <li className='section-link'>
          <Link onMouseOut={func.removeHover} to='blog' spy={true} smooth={'easeInOutCubic'} offset={navBarOffset} duration={500} onSetActive={func.closeMenu}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  }

  componentDidMount() {
    const scrollEvents = this.scrollEvents;
    document.addEventListener('scroll', scrollEvents);
    func.normaliseNavigation();
    this.setNavBarOffset();
    this.toggleActiveSection();
  }

  componentWillUnmount() {
    const scrollEvents = this.scrollEvents;
    document.removeEventListener('scroll', scrollEvents);
  }

  scrollEvents = () => {
    func.toggleNavigationBackground();
    this.toggleActiveSection();
  }

  setNavBarOffset = () => {
    this.setState({ navBarOffset: func.calculateNavBarHeight()})
  }

  toggleActiveSection() {
    const { navBarOffset } = this.state;
    const currentScroll = window.scrollY;
    const sections = document.getElementsByClassName('section');
    const sectionLinks = document.getElementsByClassName('section-link');
    // determine current section
    let linkToSetActive = null;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i].offsetTop + navBarOffset;
      const nextSection = (sections[i + 1]) ? (sections[i + 1].offsetTop + navBarOffset) : -1;
      const link = sectionLinks[i];
      if (currentScroll >= section && (currentScroll < nextSection || nextSection < 0) && !link.classList.contains('active')) {
        linkToSetActive = link;
        break;
      }
    }
    // If a new link needs to be set to active, first set all links to not active.
    if (linkToSetActive) {
      for (let i = 0; i < sectionLinks.length; i++) {
        const link = sectionLinks[i];
        if (link.classList.contains('active')) link.classList.remove('active');
      }
      linkToSetActive.classList.add('active');
    }
  }
}

export default Navigation
