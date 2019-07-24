import React from 'react';
import { Link } from 'gatsby'

import content from '../data/content';
import SEO from "../components/seo";
import Header from "../components/header"

import Blob1 from '../images/blob_homepage-1.svg';
import Blob2 from '../images/blob_homepage-2.svg';


import '../styles/main.scss';

class SuccessPage extends React.Component {


  render() {
    return(
      <div id="landing-page">
        <SEO id="sadness" title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <Header color="dark" tagline="text"/>

        <Blob1 id="blob-sm-one"/>
        <Blob2 id="blob-sm-rsvp"/>

        <h1>ni chic, ni chouette.</h1>
        <h5>(mais on vous enverra des photos et on pensera à vous.</h5>
        {/* links */}
        <div id="links">
          <Link to="/">retour au site</Link>
        </div>
        {/* links */}
      </div>
    )
  }
}

export default SuccessPage;
