class Button extends React.Component {
  render() {
    const { props } = this;
    const href = props.href || null;
    const target = (props.external ? '_blank' : null);
    const rel = (props.external ? 'noreferrer' : null); 
    const download = props.download || null;

    return <a href={href} target={target} rel={rel} download={download}>
      {this.props.children}
      <style jsx>{`
      a {
        border: 1px solid black;
        padding: 10px 20px;
        cursor: pointer !important;
        width: 60%;
        margin: 0 auto;
        margin-top: 20px;
        opacity: 0.5;
        transition: 0.2s opacity;
        display: block;
        color: black;
        text-decoration: none;
      }
      @media (min-width: 576px) {
        a {
          width: 50%;
        }
      }
      @media (min-width: 768px) {
        a {
          width: 45%;
        }
      }
      @media (min-width: 992px) {
        a {
            width: 40%;
          }
        a:hover {
          opacity: 1;
        }
      }
      @media (min-width: 1200px) {
        a {
          width: 30%;
        }
      }
      `}</style>
    </a>
  }
}

export default Button
