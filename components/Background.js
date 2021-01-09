import React from 'react';

class Background extends React.Component {
  render() {
    const imgSourceBig = require(`../images/backgrounds/${this.props.image}?resize&size=2000`)
    const imgSourceSmall = require(`../images/backgrounds/${this.props.image}?resize&size=1000`)
    return <div className='section'>
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
          background-image: url('${imgSourceSmall}');
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
            background-image: url('${imgSourceBig}');
          }
          .darken {
            height: ${ this.props.height }%;
          }
        }
      `}</style>
    </div>
  }

  // Function which should stop the weird vh behaviour on mobiles, needs fixing.
  // componentDidMount() {
  //   const height = this.props.height;
  //   afterOrientationChange();
  //   window.addEventListener('orientationchange', setBackgroundHeight);
  //   function setBackgroundHeight() {
  //     window.addEventListener('resize', afterOrientationChange);
  //   }
  //   function afterOrientationChange() {
  //     const heading = document.getElementsByClassName('headings')[0];
  //     const background = document.getElementsByClassName('background')[0];
  //     // const height = heading.offsetHeight;
  //     let vh = window.innerHeight * 0.01 * height;
  //     console.log('vh', vh);
  //     // heading.style.height = vh + 'px';
  //     // background.style.height = vh + 'px';
  //     window.removeEventListener('resize', afterOrientationChange);
  //   }
  // }
}

export default Background
