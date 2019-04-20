import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Header from '../components/header';

import '../styles/main.scss';
import BlobOne from '../images/blobs-1.svg';
import BlobTwo from '../images/blob-2.svg';

// const {google} = require('googleapis');



class IndexPage extends React.Component {


  render() {
    const eventName = "Magical Wedding"
    const eventLocation = "on ne sait pas encore, environ pas trop loin de Montréal."
    const eventDetails = "et bien nous allons nous marier."
    const request = `https://calendar.google.com/calendar/r/eventedit?text=${eventName}&dates=20191019T170000Z/20191021T170000Z&location=${eventLocation}&sprop=name:Name&sprop=website:EventWebite&details=${eventDetails}&sf=true&output=xml`
    return (
      <div>
        <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <script src="https://apis.google.com/js/api.js"></script>

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
            <a href={request}>ajouter à mon agenda</a>
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



export default IndexPage
