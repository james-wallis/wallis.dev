import Link from '../ActiveLink';
import MenuIcon from './MenuIcon';
import func from './navigationFunctions';

class Navigation extends React.Component {
  render() {
    return <nav className={(this.props.animate ? 'animated fadeInDown' : null)} onScroll={func.toggleNavigationBackground}>
      <h2 className='nav-name'>James Wallis</h2>
      <MenuIcon onClick={func.openMenu} />
      <ul onMouseOver={func.dimNavigation} onMouseOut={func.showNavigation}>
        <MenuIcon close onClick={func.closeMenu} />
        <Link href='/'>
          <li><a onMouseOut={func.removeHover}>Home</a></li>
        </Link>
        <Link href={{ pathname: '/', query: { section: 'about' } }} as='/'>
          <li><a onMouseOut={func.removeHover}>About</a></li>
        </Link>
        <Link href={{ pathname: '/', query: { section: 'portfolio' } }} as='/'>
          <li><a onMouseOut={func.removeHover}>Portfolio</a></li>
        </Link>
        <li><a target='_blank' href='/static/james-wallis-cv.pdf' onMouseOut={func.removeHover}>Resume</a></li>
      </ul>
    </nav>
  }

  componentDidMount() {
    document.addEventListener('scroll', func.toggleNavigationBackground);
    func.normaliseNavigation();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', func.toggleNavigationBackground);
  }
}

export default Navigation