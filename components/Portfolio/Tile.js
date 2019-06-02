import Link from 'next/link';

class Tile extends React.Component {
  render() {
    const { name, type, date, ongoing, src, alt, link, comingSoon } = this.props;
    let desc = type;
    if (date) desc += ` - ${date}`;
    if (ongoing) desc += ` - ongoing`;
    return <div className='tile'>
      <img src={require(`../../images/portfolio/${src}`)} alt={alt} />
      <div className='overlay'>
        <h4>{name}</h4>
        <p>{desc}</p>
        {
          comingSoon 
            ? <div className='view-button coming-soon'>
              <p>Coming soon</p>
            </div>
            : <Link href={'/portfolio' + link}>
                <div className='view-button'>
                  <p>View project</p>
                </div>
              </Link>
        }
       
      </div>
      <style jsx>{`
      .tile {
        height: auto;
        width: 100%;
        display: block;
        margin: 0 auto;
        position: relative;
        margin-bottom: 40px;
      }
      .tile:last-child {
        margin-bottom: 0;
      }
      img {
        width: 90%;
        object-fit: cover;
        height: 100%;
        color: black;
        filter: grayscale(0%) brightness(100%);
        transition: 0.5s filter;
      }

      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 90%;
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
        font-family: 'Oswald',sans-serif;
        letter-spacing: 2px;
        font-weight: 200;
        text-transform: uppercase;
        font-size: 18px;
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
        .tile {
          display: inline-block;
          width: 33.33%; 
          width: calc(100% / 3);
          height: 250px;
          margin-bottom: 0px;
        }
        .overlay {
          opacity: 0;
          background-color: rgba(0, 0, 0, 0.8);
        }
        .overlay:hover {
          opacity: 1;
        }
      }
      `}</style>
    </div>
  }
}

export default Tile