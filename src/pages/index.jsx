import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Header from '../components/header';
// import Dropdown from "../components/dropdown";

import SaveTheDate from '../components/savethedate';

import '../styles/main.scss';
import BlobOne from '../images/blobs-1.svg';
import BlobTwo from '../images/blob-2.svg';


class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      flags: []
    }
  }

  componentDidMount() {
    const language = window.navigator.language
    this.setLanguageVersion(language);
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
    const eventName = "Magical Wedding"
    const eventLocation = "on ne sait pas encore, environ pas trop loin de Montréal."
    const eventDetails = "et bien nous allons nous marier."
    const request = `https://calendar.google.com/calendar/r/eventedit?text=${eventName}&dates=20191019T170000Z/20191021T170000Z&location=${eventLocation}&sprop=name:Name&sprop=website:EventWebite&details=${eventDetails}&sf=true&output=xml`
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

          {/* links */}
          <div id="links">
            <a href={request}>ajouter à mon agenda</a>
            <span>{' // '}</span>
            <Link to="/nous-contacter">contact</Link>
          </div>
          {/* links */}

        </div>
        {/* /#main-content */}

      </div>
    )
  }
}



export default IndexPage
