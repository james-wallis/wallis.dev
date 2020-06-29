
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
          font-weight: 500;
          text-align: center;
          letter-spacing: 2px;
          margin: 0;
          margin-bottom: 0.83em;
          animation-duration: 2s;
          animation-delay: 0.5s;
          Font-Family: 'Merriweather', Serif;
          Font-Size: 48px;
        }
        .headings h2 {
          z-index: 6;
          letter-spacing: 5px;
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
          margin: 0;
          color: #c7a674;
          animation-duration: 2s;
          animation-delay: 1.2s;
          padding-bottom: 100px;
          Font-Family: 'Merriweather', Serif;
          Font-Size: 28px;
        }
        @media (min-width: 992px) {
          .headings h1 {
            letter-spacing: 6px;
            Font-Size: 60px;
          }
          .headings h2 {
            letter-spacing: 5px;
            Font-Size: 26px;
            padding-bottom: 0;
          }
        }
      `}</style>
    </div>
  }
}

export default Headings
