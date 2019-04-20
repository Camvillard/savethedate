import React from "react";
import { Link } from "gatsby";

// import SEO from "../components/seo";
import Header from '../components/header';

import '../styles/main.scss';
import BlobOne from '../images/blobs-1.svg';
import BlobTwo from '../images/blob-2.svg';

// const {google} = require('googleapis');



class SaveTheDate extends React.Component {

  displayDate = () => {
    let date = ''
    this.props.language === "fr-FR" ? date = 'dix neuf octobre' : date = 'october nineteenth';
    return date
  }

  displayYear = () => {
    let year = ''
    this.props.language === "fr-FR" ? year = 'deux mille dix neuf' : year = 'two thousand nineteen';
    return year
  }

  render() {
    return (
      <div>
        <div id="main-content">

          {/* blob one */}
          <BlobOne id="blob-one"/>
          <BlobTwo id="blob-two"/>

          {/* #date */}
          <div id="date">
            <h5 id="savethedate"><span>save the date</span></h5>
            <h2 id="cinq" className="text-strong accent-text">{this.displayDate()}</h2>
            <h2 id="annee" className="text-normal accent-text">{this.displayYear()}</h2>
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



export default SaveTheDate
