import React from 'react';
import Tile from './Tile.js'

class Row extends React.Component {
  render() {
    return <div className="portfolio-row">
      {this.props.array.map(function (tile, index) {
        return <Tile key={`tile-${index}`} {...tile} />
      })}
      <style jsx>{`
      div {
        // margin-bottom: 30px;
        text-align: center;
        // height: 30vh;
      }
      @media (min-width: 992px) {
        div {
          // height: 30vh;
          height: 20vw;
        }
      }
      `}</style>
    </div>
  }
}

export default Row
