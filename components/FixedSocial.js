
class Social extends React.Component {
  render() {
    return <div className={(this.props.animate ? 'animated fadeInUp ' : null) + 'fixed-social'}>
      <div className='social'>
        <a href='https://www.linkedin.com/in/jamesemwallis/' target='_blank' rel='noopener' rel='noreferrer'>
          <i className='fab fa-linkedin-in fa-md'></i>
        </a>
        <a href='https://www.github.com/james-wallis' target='_blank' rel='noopener' rel='noreferrer'>
          <i className='fab fa-github fa-md'></i>
        </a>
      </div>
      <div>
        <a className='email' href='mailto:mail@james-wallis.com?Subject=Hello'>mail@james-wallis.com</a>
      </div>
      <style jsx>{`
        .fixed-social {
          position: fixed;
          bottom: 20px;
          width: 100%;
          z-index: 10;
          text-align: center;
          animation-duration: 1.5s;
          animation-delay: 1.8s;
        }
        i {
          transition: color 0.3s;
          color: #aaa;
          margin-bottom: 10px;
        }
        i:hover {
          color: white;
          transition: color 0.3s;
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
      `}</style>
    </div>
  }
}

export default Social