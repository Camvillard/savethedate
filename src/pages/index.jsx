import React from "react";

import SEO from "../components/seo";
// import Dropdown from '../components/dropdown';
import Header from '../components/header';
import SaveTheDate from '../components/savethedate';

import '../styles/main.scss';

import BlobSmOne from '../images/blob-sm-1.svg';
import BlobSmRsvp from '../images/blob-sm-rsvp.svg';

import BlobLgOne from '../images/blob-lg-1.svg';
import BlobLgTwo from '../images/blob-lg-2.svg';



class IndexPage extends React.Component {

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
        language: language,
        // flags: navigator.languages
      })
  };

  render() {

    return (
      <div id="container">
        <SEO id="homepage" title="save the date" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <Header language={this.state.language} color="dark" tagline="text"/>

        <div id="main-content">

          <BlobSmOne id="blob-sm-one"/>
          <BlobSmRsvp id="blob-sm-rsvp"/>
          <BlobLgOne id="blob-lg-one"/>
          <BlobLgTwo id="blob-lg-two"/>

          <SaveTheDate language={this.state.language} />


        </div>
        {/* /#main-content */}

      </div>
    )
  }
}



export default IndexPage
