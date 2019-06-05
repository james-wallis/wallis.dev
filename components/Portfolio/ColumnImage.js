
class ColumnImage extends React.Component {
  render() {
    const { folder, text, src, alt } = this.props;
    const img = require(`../../images/portfolio/${folder}/${src}?resize&sizes[]=300&sizes[]=600`);
    return <div className='col-img'>
      <img srcSet={img.srcSet} src={img.src} alt={alt} />
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
          font-family: 'Roboto',sans-serif;
          line-height: 30px;
          margin: 0;
          margin-bottom: 5px;
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

export default ColumnImage