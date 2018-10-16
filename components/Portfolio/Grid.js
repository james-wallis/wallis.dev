import Row from './Row.js'

class Grid extends React.Component {
  state = {};

  static getDerivedStateFromProps(nextProps) {
    const array = nextProps.content;
    const splitArray = [];
    let i, j, chunk = 3;
    for (i = 0, j = array.length; i < j; i += chunk) {
      splitArray.push(array.slice(i, i + chunk));
    }
    return {
      content: splitArray
    };
  }

  render() {
    return <div className='portfolio'>
      <div className='portfolio-inner'>
        <h3>My Projects</h3>
        {this.state.content.map(function (array, index) {
          return <Row key={`row-${index}`} array={array} />
        })}
      </div>
      <style jsx>{`
        .portfolio {
          position: relative;
          z-index: 10;
          background-color: white;
        }
        .portfolio-inner {
          width: 100%;
          padding: 80px 0px;
          margin: 0 auto;
        }
        h3 {
          color: black;
          font-size: 26px;
          font-family: 'Oswald', sans-serif;
          letter-spacing: 2px;
          font-weight: 400;
          text-transform: uppercase;
          text-align: center;
          margin: 0;
          margin-bottom: 60px;
        }
        @media (min-width: 576px) {
          .portfolio-inner {
            width: 540px;
          }
        }
        @media (min-width: 768px) {
          .portfolio-inner {
            width: 720px;
          }
        }
        @media (min-width: 992px) {
          .portfolio-inner {
            width: 960px;
          }
        }
         @media (min-width: 1200px) {
          .portfolio-inner {
            width: 1140px;
          }
        }
      `}</style>
    </div>
  }
}

export default Grid