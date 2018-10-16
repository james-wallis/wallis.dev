class Background extends React.Component {
  render() {
    const imgSource = require(`../images/backgrounds/${this.props.image}`)
    return <div>
      <div className='background rellax' data-rellax-speed='2'></div>
      <div className='darken'></div>
      <style jsx>{`
        .background {
          height: 100%;
          width: 100%;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: url('${imgSource}');
          background-position: ${ this.props.imagePosition ? this.props.imagePosition : 'center'};
          background-size: cover;
          z-index: 2;
        }
        .darken {
          height: 100%;
          width: 100%;
          background-color: black;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0.8;
          z-index: 4;
        }
        @media (min-width: 992px) {
          .background {
            height: ${ this.props.height }%;
          }
          .darken {
            height: ${ this.props.height }%;
          }
        }
      `}</style>
    </div>
  }

  componentDidMount() {
    const heading = document.getElementsByClassName('headings')[0];
    const height = heading.offsetHeight;
    heading.style.height = height + 'px';
  }
}

export default Background