import React from 'react';
import NavigationHome from './HomePage';
import NavigationOther from './OtherPage';

class NavigationSwitch extends React.Component {
  render() {
    return <div>
      {((this.props.home)
      ? <NavigationHome {...this.props} />
      : <NavigationOther {...this.props} />)}
      <style global jsx>{`
      nav {
        height: auto;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        padding-top: 10px;
        padding-right: 10px;
        padding: 10px 0;
        text-align: right;
        user-select: none;
        animation-duration: 1.5s;
        animation-delay: 1.7s;
        transition: 0.2s background-color;
        z-index: 100; // Should be above everything
        display: flex;
        align-items: center;
        justify-content: space-between;
        Font-Family: 'Merriweather', Serif;
      }
      nav.dark {
        background-color: rgba(0, 0, 0, 0.8)
      }
      nav h2 {
        float: left;
        // text-transform: uppercase;
        font-size: 14px;
        text-align: left;
        letter-spacing: 1px;
        padding: 10px 40px;
        opacity: 0;
        transition: 0.5s opacity;
        font-weight: normal;
      }
      nav ul {
        margin: 0;
        transition: all 0.3s;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #edeeef;
        color: black;
        margin-left: 101vw;
        padding: 0;
        padding-top: 50px;
        height: 100vh;
      }
      nav li {
        transition: all 0.3s;
        // text-transform: uppercase;
        list-style-type: none;
        cursor: pointer !important;
        display: block;
        text-align: center;
        margin: 0;
        padding: 20px 0;
        font-size: 14px;
        letter-spacing: 1px;
        border-bottom: 1px solid #dfdddf;
      }
      nav li:last-child {
        border: 0;
      }
      nav a {
        text-decoration: none;
        color: black;
      }
      
      @media (min-width: 992px) {
        nav {
          height: auto;
        }
        nav ul {
          margin: 0;
          position: relative;
          background-color: initial;
          top: auto;
          bottom: auto;
          width: auto;
          padding: 10px 20px;
          color: rgba(238, 238, 238, 1);
          float: right;
          height: auto;
        }
        nav li {
          display: inline-block;
          margin: 10px 20px;
          padding: 0 0 3px 2px;
          font-size: 14px;
          // letter-spacing: 2px;
          border-bottom: 1px rgba(199,166,116, 0) solid !important;
        }
        nav li.active {
          border-color: rgba(199,166,116, 1) !important;
        }
        nav .dim li {
          opacity: 0.4;
        }
        nav .dim li.hover {
          opacity: 1;
        }
        nav a {
          color: white;
          text-decoration: none;
        }
      }
      `}</style>
    </div>
  }
}
export default NavigationSwitch;
