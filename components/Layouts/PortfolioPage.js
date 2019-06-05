import Layout from './Main';
import Portfolio from '../Sections/Portfolio.js';
import LightGrey from '../Sections/LightGrey.js';
import Button from '../Button';
import ColumnImage from '../Portfolio/ColumnImage';

export default class extends React.Component {
  render() {
    const { title, desc, imgFolder, sections, finalSection } = this.props.page;
    const allSections = sections;
    allSections.push(finalSection);
    return <Layout {...this.props} >
      <LightGrey className='container'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </LightGrey>
      {allSections.map((section, index, arr) =>
        <Portfolio key={index} border={(index > 0) ? true : false}>
          {(index % 2 == 1) ? 
              <div className='col col-img'>
                <ColumnImage folder={imgFolder} {...section.image} />
              </div> : null}
          {(index !== arr.length - 1) ?
            <div className='col'>
              <h4>{section.title}</h4>
              <p>{section.para}</p>
            </div>
            :
            <div className='col'>
              <h4>{section.title}</h4>
              <Button href={section.link} external>
                {section.text}
              </Button>
            </div>
          }
          {(index % 2 == 0) ?
            <div className='col col-img'>
              <ColumnImage folder={imgFolder} {...section.image} />
            </div> : null}
        </Portfolio>
      )}

      <style jsx>{`
        .col {
          width: 100%;
          padding: 0 10px;
          order: 1;
        }
        .col-img {
          order: 2;
        }
        h3, h4 {
          font-size: 26px;
          font-family: 'Oswald', sans-serif;
          letter-spacing: 2px;
          font-weight: 400;
          text-transform: uppercase;
          text-align: center;
          margin: 0;
          margin-bottom: 30px;
          // font-size: 35px;
        }
        p {
          font-size: 16px;
          font-weight: 200;
          font-family: 'Roboto', sans-serif;
          line-height: 30px;
          margin: 0;
          margin-bottom: 5px;
          text-align: justify;
          // text-align-last: center;
        }
        @media (min-width: 992px) {
          .col {
            width: 50%;
            order: unset;
          }
          .col-img {
            order: unset;
          }
        }
      `}</style>
    </Layout>
  }
}