import RequireOtherImage from './RequireOtherImage';
import RequireGifImage from './RequireGifImage';


class ColumnImageBase extends React.Component {
  render() {
    const { folder, text, src, alt } = this.props;
    const Image = getImage(src);
    return <div className='col-img'>
      {/* {showImage(folder, src, alt)} */}
      <Image dir={folder} file={src} alt={alt}/>
      {(text) ? <p>{text}</p> : null}
      <style jsx>{`
        p {
          text-align: center;
          font-size: 16px;
          font-weight: 200;
          line-height: 30px;
          margin: 0;
          margin-bottom: 5px;
          font-Family: 'Muli',Sans-Serif;
        }
      `}</style>
      <style global jsx>{`
        .column-image {
          margin-top: 30px;
          width: 100%;
          position: 1;
        }
        @media (min-width: 992px) {
          .column-image {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  }
}

// const showImage = (dir, file, alt) => {
//   if (file.endsWith('.gif')) {
//     return <RequireGifImage dir={dir} file={file} alt={alt} />
//   }
//   return <RequireOtherImage dir={dir} file={file} alt={alt} />
// }

const getImage = (file) => {
  if (file.endsWith('.gif')) {
    return RequireGifImage
  }
  return RequireOtherImage
}

export default ColumnImageBase
