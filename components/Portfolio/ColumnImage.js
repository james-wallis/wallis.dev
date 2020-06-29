
class ColumnImage extends React.Component {
  render() {
    const { folder, text, src, alt } = this.props;
    const image = getImgSrc(folder, src);
    return <div className='col-img'>
      <img srcSet={image.srcSet} src={image.src} alt={alt} />
      {(text) ? <p>{text}</p> : null}
      <style jsx>{`
        img {
          margin-top: 30px;
          width: 100%;
          position: 1;
        }
        p {
          text-align: center;
          font-size: 16px;
          font-weight: 200;
          line-height: 30px;
          margin: 0;
          margin-bottom: 5px;
          font-Family: 'Muli',Sans-Serif;
        }
        @media (min-width: 992px) {
          img {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  }
}

const getImgSrc = (dir, file) => {
  if (file.endsWith('.gif')) {
    const src = require(`../../images/portfolio/${dir}/${file}`);
    return { srcSet: null, src };
  }
  const { srcSet, src } = require(`../../images/portfolio/${dir}/${file}?resize&sizes[]=300&sizes[]=600`);
  return { srcSet, src };
}

export default ColumnImage
