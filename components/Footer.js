
class Footer extends React.Component {
  render() {
    return <footer className='animated fadeInUp'>
      <div className='social'>
        <i className='fab fa-linkedin-in fa-2x'></i>
        <i className='fab fa-github fa-2x'></i>
      </div>
      <div>
        <a href='mailto:mail@james-wallis.com?Subject=Hello'>mail@james-wallis.com</a>
        <p>&copy; 2018 James Wallis. All rights reserved.</p>
      </div>
      <style jsx>{`
        footer {
          background-color: #26262a;
          text-align: center;
          padding: 40px 0;
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
        i:first-child {
          margin-right: 30px;
        }
        a, p {
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s;
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