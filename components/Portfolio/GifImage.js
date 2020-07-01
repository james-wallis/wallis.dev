class RequireGifImage extends React.Component {
  render() {
    const { file, alt } = this.props;
    const src = require(`../../images/gifs/${file}`);
    return <img className='column-image' src={src} alt={alt} />
  }
}

export default RequireGifImage
