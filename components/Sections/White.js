
export default class Headings extends React.Component {
  render() {
    return <div>
      {this.props.children}
      <style jsx>{`
        background-color: #FFF;
        padding: 80px 10%;
        text-align: center;
        color: black;
        border-top: ${ 'border' in this.props ? '1px solid #f1f1f1' : 'none' };
        position: relative;
        z-index: 10;
        @media (min-width: 992px) {
          padding: 80px 20%;
        }
      `}</style>
    </div>
  }
}