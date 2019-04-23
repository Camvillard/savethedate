import React from 'react';
import { Link } from 'gatsby'

import content from '../data/content';
import { defineContentLanguage } from '../helpers/helpers'
import SEO from "../components/seo";
import Header from "../components/header"

import BlobSmOne from '../images/blob-sm-1.svg';
import BlobSmRsvp from '../images/blob-sm-rsvp.svg';
import BlobLgOne from '../images/blob-lg-1.svg';
import BlobLgTwo from '../images/blob-lg-2.svg';

import '../styles/main.scss';

class SuccessPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      language: ''
    }
  }

  componentDidMount() {
    // first things first, we define the global language accordingly to the browser
    this.setState({
      language: navigator.language
    })
  }

  render() {
    const data = defineContentLanguage(this.state.language, content);
    return(
      <div id="landing-page">
        <SEO id="sadness" title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <Header language={this.state.language} color="dark" tagline="text"/>

        <BlobSmOne id="blob-sm-one"/>
        <BlobSmRsvp id="blob-sm-rsvp"/>
        <BlobLgOne id="blob-lg-one"/>
        <BlobLgTwo id="blob-lg-two"/>

        <h1>{data.sadnessHeader}</h1>
        <h5>{data.sadnessTagline}</h5>
        {/* links */}
        <div id="links">
          <Link to="/">{data.backToSite}</Link>
        </div>
        {/* links */}
      </div>
    )
  }
}

export default SuccessPage;
