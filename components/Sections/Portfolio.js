import React from 'react';

export default class Portfolio extends React.Component {
  render() {
    const { children, border } = this.props;
    return <div>
      {children}
      <style jsx>{`
        background-color: #fff;
        padding: 40px 10%;
        text-align: center;
        color: black;
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        flex-direction: column;
        border-top: ${ (border) ? '1px solid #f1f1f1' : 'none' };
        @media (min-width: 992px) {
          flex-direction: unset;
          padding: 80px 10%;
        }
      `}</style>
    </div>
  }
}