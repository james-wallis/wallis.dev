import Link from 'next/link';

class Tile extends React.Component {
  render() {
    const { name, type, date, ongoing, src, alt, link, comingSoon } = this.props;
    let desc = type;
    if (date) desc += ` - ${date}`;
    if (ongoing) desc += ` - ongoing`;
    const img = require(`../../images/portfolio/${src}?resize&sizes[]=150&sizes[]=300&sizes[]=600`);
    return <div className='tile-outer'>
      <div onMouseEnter={this.zoomImage} onMouseLeave={this.zoomImage} className='tile-inner'>
        <img srcSet={img.srcSet} src={img.src} alt={alt} />
        <div className='overlay'>
          <h4>{name}</h4>
          <p>{desc}</p>
          {
            comingSoon 
              ? <div className='view-button coming-soon'>
                <p>Coming soon</p>
              </div>
              : <Link href={'/portfolio' + link}>
                  <a className='view-button'>
                    <p>View project</p>
                  </a>
                </Link>
          }
        
        </div>
      </div>
      <style jsx>{`
      .tile-outer {
        height: auto;
        width: 100%;
        display: block;
        margin: 0 auto;
        position: relative;
        // margin-bottom: 40px;
        padding-bottom: 20px;
      }
      .tile-outer:last-child {
        // margin-bottom: 0;
      }
      .tile-inner {
        // width: 90%;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
      }
      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        color: black;
        filter: grayscale(0%) brightness(100%);
        transition: 0.5s filter,  0.5s transform;
      }

      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        margin: 0 auto;
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.6);
        transition: 0.5s opacity;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .overlay h4, .overlay p {
        margin: 0;
      }
      .overlay h4 {
        font-family: 'Merriweather',Serif;
        letter-spacing: 2px;
        font-weight: 200;
        text-transform: uppercase;
        font-size: 16px;
      }
      .overlay p {
        text-transform: capitalize;
        font-style: italic;
        font-size: 12px;
        letter-spacing: 0.6px;
      }
      .view-button {
        margin-top: 10px;
        border: 1px solid white;
        padding: 10px 20px;
        cursor: pointer !important;
        color: white;
        text-decoration: none;
      }
      .view-button.coming-soon {
        cursor: default !important;
      }
      .view-button p {
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
        font-style: normal;
      }
      @media (min-width: 992px) {
        .tile-outer {
          display: inline-block;
          width: 33.33%;
          width: calc(100% / 3);
          height: 100%;
          margin-bottom: 0px;
          padding-bottom: 0px;
        }
        .tile-inner {
          height: inherit;
        }
        .overlay {
          opacity: 0;
          background-color: rgba(0, 0, 0, 0.8);
        }
        .overlay:hover {
          opacity: 1;
        }
        .zoom {
          transform: scale(1.1);
          transition: 0.5s transform; 
        }
      }
      `}</style>
    </div>
  }

  zoomImage(e) {
    const el = e.currentTarget;
    const img = el.getElementsByTagName('img')[0];
    if (img.classList.contains('zoom')) {
      img.classList.remove('zoom');
    } else {
      img.classList.add('zoom');
    }
  }
}

export default Tile
