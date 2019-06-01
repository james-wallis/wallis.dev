
class Footer extends React.Component {
  render() {
    return <footer>
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
        <p>&copy; 2019 James Wallis. All rights reserved.</p>
      </div>
      <style jsx>{`
        footer {
          background-color: #26262a;
          text-align: center;
          padding: 40px 0;
          z-index: 20;
          position: relative;
        }
        .social {
          margin-bottom: 1em;
        }
        i {
          transition: color 0.3s;
          color: #aaa;
        }
        i:hover {
          color: white;
          transition: color 0.3s;
        }
        .social a:first-child {
          margin-right: 30px;
        }
        a, p {
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s;
        }
        a.email {
          letter-spacing: 0.1px;
          font-size: 14px;
        }
        p {
          font-size: 12px;
          color: #888;
          margin-top: 20px;
        }
        a:hover {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
      `}</style>
    </footer>
  }
}

export default Footer