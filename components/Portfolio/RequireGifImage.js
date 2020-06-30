class RequireGifImage extends React.Component {
  render() {
    const { dir, file, alt } = this.props;
    const src = require(`../../images/portfolio/${dir}/${file}`);
    return <img className='column-image' src={src} alt={alt} />
  }
}

export default RequireGifImage
