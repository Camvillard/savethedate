import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Header from '../components/header';

import '../styles/main.scss';
import BlobOne from '../images/blobs-1.svg';
import BlobTwo from '../images/blob-2.svg';

import ApiCalendar from 'react-google-calendar-api';



class IndexPage extends React.Component {

  handleSignIn() {
    ApiCalendar.handleAuthClick();
    const calendar = ApiCalendar.setCalendar('cdltbisou@gmail.com');
    console.log('prout');
    // this.hello();
    // this.createEvent();
    const event = {
      "end": {
        "date": "2019-10-21"
      },
      "start": {
        "date": "2019-10-19"
      },
      "description": "magical wedding",
      "colorId": "4"
    }
    // const calendar = 'cdltbisou@gmail.com';
    const myEvent = ApiCalendar.createEvent(event, calendar);
    console.log(myEvent);
  }

  hello = () => {
    console.log('still prout');
  }

  handleSignOut() {
    ApiCalendar.handleSignoutClick();
    console.log('encore prout');
  }

  render() {
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
            <Link to="#" onClick={this.handleSignIn}>ajouter à mon agenda</Link>
            <span>{' // '}</span>
            <Link to="/nous-contacter">contact</Link>
            <Link to="#" onClick={this.handleSignOut}>sign out</Link>
          </div>
          {/* links */}

        </div>
        {/* /#main-content */}

      </div>
    )
  }
}



export default IndexPage
