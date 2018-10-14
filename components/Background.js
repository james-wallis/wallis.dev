class Background extends React.Component {
  render() {
    return <div>
      <div className='background rellax' data-rellax-speed='2'></div>
      <div className='darken'></div>
      <style jsx>{`
        .background {
          height: ${ this.props.height }vh;
          width: 100%;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: ${`url(/static/${this.props.image})`};
          background-position: ${ this.props.imagePosition ? this.props.imagePosition : 'center'};
          background-size: cover;
          z-index: 2;
        }
        .darken {
          height: ${ this.props.height }vh;
          width: 100%;
          background-color: black;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0.8;
          z-index: 4;
        }
      `}</style>
    </div>
  }
}

export default Background