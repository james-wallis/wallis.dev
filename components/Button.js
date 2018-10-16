class Button extends React.Component {
  state = {};

  static getDerivedStateFromProps(nextProps) {
    const href = nextProps.href || null;
    const target = (nextProps.external ? '_blank' : null);
    const rel = (nextProps.external ? 'noreferrer' : null); 
    const download = nextProps.download || null;
    return {
      href: href,
      target: target,
      download: download,
      rel: rel
    };
  }
  render() {
    return <a href={this.state.href} target={this.state.target} rel={this.state.rel} download={this.state.download}>
      {this.props.children}
      <style jsx>{`
      a {
        border: 1px solid black;
        padding: 10px 20px;
        cursor: pointer !important;
        width: 50%;
        margin: 0 auto;
        margin-top: 20px;
        opacity: 0.5;
        transition: 0.2s opacity;
        display: block;
        color: black;
        text-decoration: none;
      }
      @media (min-width: 992px) {
        a {
            width: 20%;
          }
        a:hover {
          opacity: 1;
        }
      }
      `}</style>
    </a>
  }
}

export default Button