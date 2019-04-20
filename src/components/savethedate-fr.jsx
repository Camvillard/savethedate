import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Header from '../components/header';

import '../styles/main.scss';
import BlobOne from '../images/blobs-1.svg';
import BlobTwo from '../images/blob-2.svg';

// const {google} = require('googleapis');



class SaveTheDateFr extends React.Component {


  render() {
    return (
      <div>
        <div id="main-content">

          {/* blob one */}
          <BlobOne id="blob-one"/>
          <BlobTwo id="blob-two"/>

          <Header />

          {/* #date */}
          <div id="date">
            <h5 id="savethedate"><span>save the date</span></h5>
            <h2 id="cinq" className="text-strong accent-text">dix neuf octobre</h2>
            <h2 id="annee" className="text-normal accent-text">deux mille dix neuf</h2>
          </div>
          {/* /#date */}


          {/* links */}
          <div id="links">
            <Link to="/" onClick={this.handleClick}>ajouter à mon agenda</Link>
            <span>{' // '}</span>
            <Link to="/nous-contacter">contact</Link>
          </div>
          {/* links */}

        </div>
        {/* /#main-content */}

      </div>
    )
  }
}



export default SaveTheDateFr
