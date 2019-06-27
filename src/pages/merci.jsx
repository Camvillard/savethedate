import React from 'react';
import { Link } from 'gatsby';

import SEO from "../components/seo";
import Header from "../components/header"
import { defineContentLanguage } from '../helpers/helpers';


import content from '../data/content';
import BlobSmOne from '../images/blob-sm-1.svg';
import BlobSmTwo from '../images/blob-sm-2.svg';
import BlobLgOne from '../images/blob-lg-1.svg';
import BlobLgTwo from '../images/blob-lg-2.svg';

import '../styles/main.scss'

class Merci extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: ''
    }
  }

  componentDidMount() {
    // set the language accordingly with the browsers language
    this.setLanguageVersion(window.navigator.language);
  }

  //changes languages depending on the browser preferences
  setLanguageVersion = (language) => {
      this.setState({
        language: language
      })
  }

  render() {
    return(
      <div id="landing-page">
        <SEO id="merci" title="Merci beaucoup" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <Header color="dark" tagline="text"/>


        <BlobSmOne id="blob-sm-one"/>
        <BlobSmTwo id="blob-sm-rsvp"/>
        <BlobLgOne id="blob-lg-one"/>
        <BlobLgTwo id="blob-lg-two"/>

        <h1>merci !</h1>
        <h5>on a bien reçu votre message, on s'en occupe dare-dare.</h5>

        {/* links */}
        <div id="links">
          <Link to="/">retour au site</Link>
        </div>
        {/* links */}

      </div>
    )
  }

}

export default Merci;
