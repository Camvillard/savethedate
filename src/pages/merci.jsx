import React from 'react';
import { Link } from 'gatsby';

import SEO from "../components/seo";
import { defineContentLanguage } from '../helpers/helpers';

import content from '../data/content';
import BlobSmOne from '../images/blob-sm-1.svg';
import BlobSmRsvp from '../images/blob-sm-rsvp.svg';
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
    const data = defineContentLanguage(this.state.language, content);
    return(
      <div id="thanks-page">
        <SEO id="merci" title="Merci beaucoup" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />


        <BlobSmOne id="blob-sm-one"/>
        <BlobSmRsvp id="blob-sm-rsvp"/>
        <BlobLgOne id="blob-lg-one"/>
        <BlobLgTwo id="blob-lg-two"/>
        <h1>{data.contactSuccess}</h1>
        <h5>{data.contactContent}</h5>
        <Link to="/">{data.backToSite}</Link>
      </div>
    )
  }

}

export default Merci;
