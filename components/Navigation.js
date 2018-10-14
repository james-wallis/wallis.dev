import Link from './ActiveLink'

class Navigation extends React.Component {
  render() {
    return <nav className={(this.props.animate ? 'animated fadeInDown' : null)} onScroll={this.toggleNavigationBackground}>
      <h2 className='nav-name'>James Wallis</h2>
      <ul>
        <Link href='/'>
          <li><a>Home</a></li>
        </Link>
        <Link href='/about'>
          <li><a>About</a></li>
        </Link>
        <Link href='/portfolio'>
          <li><a>Portfolio</a></li>
        </Link>
        <Link href='/resume'>
          <li><a>Resume</a></li>
        </Link>
        <Link href='/contact'>
          <li><a>Contact</a></li>
        </Link>
      </ul>
      <style jsx>{`
      nav {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        padding-top: 10px;
        padding-right: 10px;
        text-align: right;
        user-select: none;
        animation-duration: 1.5s;
        animation-delay: 1.7s;
        transition: 0.5s background-color;
        z-index: 100; // Should be above everything
      }
      nav.dark {
        background-color: rgba(0, 0, 0, 0.9)
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
      }
      ul {
        padding: 10px 20px;
        margin: 0;
        transition: all 0.3s;
        color: rgba(238, 238, 238, 1);
        float: right;
      }
      li {
        margin: 10px 20px;
        padding: 0 0 3px 2px;
        transition: all 0.3s;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
        list-style-type: none;
        display: inline-block;
        cursor: pointer !important;
      }
      li.active {
        border-bottom: 1px #c7a674 solid;
      }
      `}</style>
    </nav>
  }

  componentDidMount() {
    const toggleNavigationBackground = this.toggleNavigationBackground;
    document.addEventListener('scroll', toggleNavigationBackground);
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
}

export default Navigation