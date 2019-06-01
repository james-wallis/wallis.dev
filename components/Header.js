
class Headings extends React.Component {
  render() {
    return <div className='headings'>
      <h1 className={(this.props.animate ? 'animated fadeIn' : null)}>{this.props.h1}</h1>
      <h2 className={(this.props.animate ? 'animated fadeIn' : null)}>{this.props.h2}</h2>
      <style jsx>{`
        .headings {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 95%;
          height: ${ this.props.height }vh;
          overflow-wrap: break-word;
          margin: 0 auto;
        }
        .headings h1 {
          z-index: 6;
          font-family: 'Oswald', sans-serif;
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 10px;
          font-size: 26px;
          margin: 0;
          margin-bottom: 0.83em;
          animation-duration: 2s;
          animation-delay: 0.5s;
        }
        .headings h2 {
          z-index: 6;
          font-family: 'Oswald', sans-serif;
          letter-spacing: 10px;
          font-size: 22px;
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
          margin: 0;
          color: #c7a674;
          animation-duration: 2s;
          animation-delay: 1.2s;
          padding-bottom: 150px;
        }
        @media (min-width: 992px) {
          .headings h1 {
            letter-spacing: 20px;
            font-size: 35px;
          }
          .headings h2 {
            letter-spacing: 20px;
            font-size: 24px;
            padding-bottom: 0;
          }
        }
      `}</style>
    </div>
  }
}

export default Headings