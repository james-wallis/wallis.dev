import Link from './ActiveLink'
import MenuIcon from './MenuIcon'

class Navigation extends React.Component {
  render() {
    return <nav className={(this.props.animate ? 'animated fadeInDown' : null)} onScroll={this.toggleNavigationBackground}>
      <h2 className='nav-name'>James Wallis</h2>
      <MenuIcon onClick={this.openMenu}/>
      <ul onMouseOver={this.dimNavigation} onMouseOut={this.showNavigation}>
        <MenuIcon close onClick={this.closeMenu} />
        <Link href='/'>
          <li><a onMouseOut={this.removeHover}>Home</a></li>
        </Link>
        <Link href='/about'>
          <li><a onMouseOut={this.removeHover}>About</a></li>
        </Link>
        <Link href='/portfolio'>
          <li><a onMouseOut={this.removeHover}>Portfolio</a></li>
        </Link>
        <Link href='/resume'>
          <li><a onMouseOut={this.removeHover}>Resume</a></li>
        </Link>
        {/* <Link href='/contact'>
          <li><a>Contact</a></li>
        </Link> */}
      </ul>
      <style jsx>{`
      nav {
        height: auto;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        padding-top: 10px;
        padding-right: 10px;
        padding: 10px 0;
        text-align: right;
        user-select: none;
        animation-duration: 1.5s;
        animation-delay: 1.7s;
        transition: 0.2s background-color;
        z-index: 100; // Should be above everything
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      nav.dark {
        background-color: rgba(0, 0, 0, 0.8)
      }
      h2 {
        float: left;
        text-transform: uppercase;
        font-size: 12px;
        text-align: left;
        letter-spacing: 2px;
        padding: 10px 40px;
        opacity: 0;
        transition: 0.5s opacity;
        font-weight: normal;
      }
      ul {
        margin: 0;
        transition: all 0.3s;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #edeeef;
        color: black;
        margin-left: 101vw;
        padding: 0;
        padding-top: 50px;
        height: 100vh;
      }
      li {
        transition: all 0.3s;
        text-transform: uppercase;
        list-style-type: none;
        cursor: pointer !important;
        display: block;
        text-align: center;
        margin: 0;
        padding: 20px 0;
        font-size: 14px;
        letter-spacing: 3px;
        border-bottom: 1px solid #dfdddf;
      }
      li:last-child {
        border: 0;
      }
      
      @media (min-width: 992px) {
        nav {
          height: auto;
        }
        ul {
          margin: 0;
          position: relative;
          background-color: initial;
          top: auto;
          bottom: auto;
          width: auto;
          padding: 10px 20px;
          color: rgba(238, 238, 238, 1);
          float: right;
        }
        li {
          display: inline-block;
          margin: 10px 20px;
          padding: 0 0 3px 2px;
          font-size: 12px;
          letter-spacing: 2px;
          border: none;
        }
        li.active {
          border-bottom: 1px #c7a674 solid !important;
        }
        .dim li {
          opacity: 0.4;
        }
        .dim li.hover {
          opacity: 1;
        }
      }
      `}</style>
    </nav>
  }

  componentDidMount() {
    const toggleNavigationBackground = this.toggleNavigationBackground;
    document.addEventListener('scroll', toggleNavigationBackground);
    toggleNavigationBackground();
  }

  componentWillUnmount() {
    const toggleNavigationBackground = this.toggleNavigationBackground;
    document.removeEventListener('scroll', toggleNavigationBackground);
  }

  toggleNavigationBackground() {
    const nav = document.getElementsByTagName('nav')[0];
    const navName = document.getElementsByClassName('nav-name')[0];
    const background = document.getElementsByClassName('background')[0];
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop && scrollTop !== 0 && scrollTop > (background.offsetHeight - nav.offsetHeight) && !nav.classList.contains('dark')) {
      nav.classList.add('dark');
      navName.style.opacity = '1';
    } else if (scrollTop && scrollTop !== 0 && scrollTop < (background.offsetHeight - nav.offsetHeight) && nav.classList.contains('dark')) {
      nav.classList.remove('dark');
      navName.style.opacity = '0';
    }
  }

  dimNavigation(e) {
    const ul = e.currentTarget;
    const target = e.target;
    if (!ul.classList.contains('dim')) {
      ul.classList.add('dim');
    }
    if (target.tagName.toLowerCase() === 'a') {
      target.parentNode.classList.add('hover');
    }
  }

  showNavigation(e) {
    const ul = e.currentTarget;
    if (ul.classList.contains('dim')) {
      ul.classList.remove('dim');
    }
  }

  removeHover(e) {
    const el = e.currentTarget;
    el.parentNode.classList.remove('hover');
  }

  openMenu() {
    const nav = document.getElementsByTagName('nav')[0];
    const ul = nav.getElementsByTagName('ul')[0];
    ul.style.marginLeft = 0;
  }

  closeMenu() {
    const nav = document.getElementsByTagName('nav')[0];
    const ul = nav.getElementsByTagName('ul')[0];
    ul.style.marginLeft = '';
  }
}

export default Navigation