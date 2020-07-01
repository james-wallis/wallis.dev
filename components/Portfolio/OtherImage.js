class RequireOtherImage extends React.Component {
  render() {
    const { dir, file, alt } = this.props;
    const { src, srcSet } = require(`../../images/portfolio/${dir}/${file}?resize&sizes[]=300&sizes[]=600`);
    return <img className='column-image' srcSet={srcSet} src={src} alt={alt} />
  }
}

export default RequireOtherImage
