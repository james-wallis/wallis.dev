
export default class LightGrey extends React.Component {
  render() {
    return <div>
      {this.props.children}
      <style jsx>{`
        background-color: #edeeef;
        padding: 40px 10%;
        text-align: center;
        color: black;
        position: relative;
        z-index: 10;
        @media (min-width: 992px) {
          padding: 80px 30%;
        }
      `}</style>
    </div>
  }
}