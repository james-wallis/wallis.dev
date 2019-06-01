import Tile from './Tile.js'

class Row extends React.Component {
  render() {
    return <div>
      {this.props.array.map(function (tile, index) {
        return <Tile key={`tile-${index}`} {...tile} />
      })}
      <style jsx>{`
      div {
        margin-bottom: 30px;
        text-align: center;
      }
      `}</style>
    </div>
  }
}

export default Row