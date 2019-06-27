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

import BlobSmOne from '../images/blob-sm-1.svg';
import BlobSmTwo from '../images/blob-sm-2.svg';
import BlobLgOne from '../images/blob-lg-1.svg';
import BlobLgTwo from '../images/blob-lg-2.svg';



class IndexPage extends React.Component {

  render() {
    return (
      <div id="homepage">
        <SEO title="save the date" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />
        <Header color="dark" position="fixed"/>

        <div className="container-fullheight" >

          <div id="date">
            <h1 className="accent-text ">dix neuf octobre</h1>
            <h1 className="text-light accent-text">deux mille dix neuf</h1>
          </div>

          <ul id="actions">
            <li>
              <Link to="/location" className="text-strong">c'est où ?</Link>
            </li>
            <li>
              <Link to="/informations" className="text-strong">c'est comment ?</Link>
            </li>
          </ul>

          <Footer />

          <BlobSmOne className="blob-sm-one"/>
          <BlobSmTwo className="blob-sm-two"/>
          <BlobLgOne className="blob-lg-one"/>
          <BlobLgTwo className="blob-lg-two"/>

        </div>
      </div>

    )
  }
}



export default IndexPage
