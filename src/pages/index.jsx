import React from "react";
// import { Link } from "gatsby";

import SEO from "../components/seo";
import Header from '../components/header';
import Dropdown from "../components/dropdown";

import SaveTheDate from '../components/savethedate';

import '../styles/main.scss';
import BlobOne from '../images/blobs-1.svg';
import BlobTwo from '../images/blob-2.svg';



// const {google} = require('googleapis');



class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      flags: []
    }
  }

  componentWillMount() {
    console.log(navigator.language);
    console.log(navigator.languages);
    this.setLanguageVersion(navigator.language);
  }

  //changes languages depending on the browser preferences
  setLanguageVersion = (language) => {
      this.setState({
        language: language,
        flags: navigator.languages
      })
  };

  // handleClick = () => {
  //   this.setState({
  //     language:
  //   })
  // }


  render() {
    return (
      <div>
        <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />

        {/* <Dropdown title="changer de langue" list={this.state.flags}/> */}

        <Header language={this.state.language} flags={this.state.flags} />

        <div id="main-content">

          {/* blob one */}
          <BlobOne id="blob-one"/>
          <BlobTwo id="blob-two"/>

          <SaveTheDate language={this.state.language} />



        </div>
        {/* /#main-content */}

      </div>
    )
  }
}



export default IndexPage
