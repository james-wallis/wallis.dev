
export default class Portfolio extends React.Component {
  render() {
    return <div>
      {this.props.children}
      <style jsx>{`
        background-color: #fff;
        padding: 80px 10%;
        text-align: center;
        color: black;
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        border-top: ${ 'border' in this.props ? '1px solid #f1f1f1' : 'none' };
      `}</style>
    </div>
  }
}