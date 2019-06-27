import React from 'react';
import { Link } from 'gatsby'

import content from '../data/content';
import SEO from "../components/seo";
import Header from "../components/header"

import BlobSmOne from '../images/blob-sm-1.svg';
import BlobSmTwo from '../images/blob-sm-2.svg';
import BlobLgOne from '../images/blob-lg-1.svg';
import BlobLgTwo from '../images/blob-lg-2.svg';

import '../styles/main.scss';

class SuccessPage extends React.Component {


  render() {
    return(
      <div id="landing-page">
        <SEO id="sadness" title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <Header color="dark" tagline="text"/>

        <BlobSmOne id="blob-sm-one"/>
        <BlobSmTwo id="blob-sm-rsvp"/>
        <BlobLgOne id="blob-lg-one"/>
        <BlobLgTwo id="blob-lg-two"/>

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
