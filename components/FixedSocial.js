import { Link } from 'react-scroll'
import { calculateNavBarHeight } from './Navigation/navigationFunctions';

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarOffset: 0
    }
  }
  render() {
    const {navBarOffset} = this.state;
    return <div className={(this.props.animate ? 'animated fadeInUp ' : null)} id='fixed-social'>
      <div id='down-page-arrow' onMouseEnter={this.setNavBarOffset} onClick={this.setNavBarOffset}>
        <Link activeClass='active' to='about' spy={true} smooth={'easeInOutCubic'} offset={navBarOffset} duration={500}>
            <i className='fal fa-angle-double-down fa-2x'></i>
        </Link>
      </div>
      <div className='social'>
        <a href='https://www.linkedin.com/in/jamesemwallis/' target='_blank' rel='noopener' rel='noreferrer'>
          <i className='fab fa-linkedin-in fa-md'></i>
        </a>
        <a href='https://www.github.com/james-wallis' target='_blank' rel='noopener' rel='noreferrer'>
          <i className='fab fa-github fa-md'></i>
        </a>
      </div>
      <div>
        <a className='email' href='mailto:j@wallis.dev?Subject=Hello'>j@wallis.dev</a>
      </div>
      <style jsx>{`
        #fixed-social {
          position: fixed;
          bottom: 30px;
          width: 100%;
          z-index: 10;
          text-align: center;
          animation-duration: 1.5s;
          animation-delay: 1.8s;
        }
        i {
          transition: color 0.3s, border 0.3s;
          color: #aaa;
          border-color: #aaa;
          margin-bottom: 10px;
        }
        i:hover {
          transition: color 0.3s, border 0.3s;
          color: white;
          border-color: white;
        }
        .social a:first-child {
          margin-right: 30px;
        }
        a {
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s;
        }
        a.email {
          letter-spacing: 0.1px;
          font-size: 12px;
        }
        a:hover {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
        #down-page-arrow {
          margin-bottom: 60px;
        }
        .fa-angle-double-down {
          border: 2px solid;
          border-radius: 28px;
          padding: 5px;
        }
      `}</style>
    </div>
  }

  componentDidMount() {
    this.setNavBarOffset();
  }

  setNavBarOffset = () => {
    console.log('fired');
    this.setState({ navBarOffset: calculateNavBarHeight() })
  }
}

export default Social