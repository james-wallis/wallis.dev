class Navigation extends React.Component {
  render() {
    return <div onClick={this.props.onClick} className={(this.props.close ? 'menu-close' : 'menu-icon')}>
      <div className='menu-icon-line'></div>
      {this.props.close ? null : <div className='menu-icon-line'></div>}
      <div className='menu-icon-line'></div>
      <style jsx>{`
      // Open icon
      .menu-icon {
        margin-right: 20px;
      }
      .menu-icon-line {
        width: 30px;
        height: 3px;
        background-color: white;
        margin: 8px 0;
      }
      .menu-icon-line:first-child {
        margin-top: 0;
      } 
      .menu-icon-line:last-child {
        margin-bottom: 0;
      }
      // Close icon
      .menu-close {
        position: absolute;
        right: 20px;
        top: 34px;
      }
      .menu-close .menu-icon-line {
        margin: 0;
        background-color: #26262a;
      }
      .menu-close .menu-icon-line:first-child {
        transform: rotate(45deg);
      }
      .menu-close .menu-icon-line:last-child {
        transform: rotate(135deg);
        margin-top: -2px;
      }
      
      @media (min-width: 992px) {
        .menu-icon, .menu-close {
          display: none;
        }
      }
      `}</style>
    </div>
  }
}

export default Navigation