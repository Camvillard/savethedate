// external libs
import React from 'react';
import { Link } from 'gatsby'

// internal stuff
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from '../components/footer';

import { defineContentLanguage } from '../helpers/helpers'

// style & assets
import BlobSmOne from '../images/blob-sm-1.svg';
import BlobSmTwo from '../images/blob-sm-2.svg';
import BlobLgOne from '../images/blob-lg-1.svg';
import BlobLgTwo from '../images/blob-lg-2.svg';

import '../styles/main.scss';

class SuccessPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      language: navigator.language
    }
  }


  render() {
    const data = defineContentLanguage(this.state.language).success;
    return(
      <div id="landing-page">
        <SEO id="success" title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <Header language={this.state.language} color="dark" position="fixed"/>

        <BlobSmOne id="blob-sm-one"/>
        <BlobSmTwo id="blob-sm-rsvp"/>
        <BlobLgOne id="blob-lg-one"/>
        <BlobLgTwo id="blob-lg-two"/>

        <h1>{data.header}</h1>
        <h5>{data.content}</h5>

        {/* links */}
        <Footer />
        {/* links */}

      </div>
    )
  }
}

export default SuccessPage;
