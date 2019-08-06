import React from 'react';
import { Link } from 'gatsby';

import SEO from "../components/seo";
import Header from "../components/header"

import Blob1 from '../images/blob_homepage-1.svg';
import Blob2 from '../images/blob_homepage-2.svg';

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


        <Blob1 id="blob-sm-one"/>
        <Blob2 id="blob-sm-rsvp"/>

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
