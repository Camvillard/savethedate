// external libs
import React from "react";
import { Link } from 'gatsby';

// internal stuff
import SEO from "../components/seo";
import Header from '../components/header';
import Footer from '../components/footer';
// import SaveTheDate from '../components/savethedate';

// import { defineContentLanguage } from '../helpers/helpers';

// style & assets
import '../styles/main.scss';

import Blob1 from '../images/blob_homepage-1.svg';
import Blob2 from '../images/blob_homepage-2.svg';



class IndexPage extends React.Component {

  render() {
    return (
      <React.Fragment>

        <SEO title="save the date" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <div id="page-homepage">


          <div className="container-fullpage content-homepage">
          <div id="homepage-header">
            <h6>cam & alex</h6>
          </div>

          <div className="homepage-center">

            <div id="location" className="text-link">
              <Link to="/location" id="location-link-cursor">le lieu</Link>
            </div>

            <div id="date">
              <h1>dix neuf octobre <br/>
              deux mille dix neuf</h1>
            </div>

            <div id="informations" className="text-link">
                <Link to="/informations" id="info-link-cursor">les infos</Link>
            </div>

          </div>


            <Footer />

            <Blob1 className="blob-homepage-one"/>
            <Blob2 className="blob-homepage-two"/>

          </div>
        </div>
      </React.Fragment>

    )
  }
}



export default IndexPage
