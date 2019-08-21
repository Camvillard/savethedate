import React from 'react';
import { Link } from 'gatsby';

import SEO from "../components/seo";
import Navbar from "../components/navbar"

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
      <div id="thanks-page">
        <SEO id="merci" title="Merci beaucoup" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />


        <Navbar
          linksColor="white"
          bgColor="yellow"
          sidebarColor="yellow"
          toggleColor="yellow"
        />


        <Blob1 id="blob-thanks-one" className="blob"/>
        <Blob2 id="blob-thanks-two" className="blob"/>

        <h1>merci !</h1>
        <p>on a bien reçu votre message, on s'en occupe dare-dare.</p>

        <Link to="/" className="back-button">retour au site</Link>

      </div>
    )
  }

}

export default Merci;
