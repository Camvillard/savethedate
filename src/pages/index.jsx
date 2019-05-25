// external libs
import React from "react";
import { Link } from 'gatsby';

// internal stuff
import SEO from "../components/seo";
import Header from '../components/header';
import Footer from '../components/footer';
// import SaveTheDate from '../components/savethedate';

import { defineContentLanguage } from '../helpers/helpers';

// style & assets
import '../styles/main.scss';

import BlobSmOne from '../images/blob-sm-1.svg';
import BlobSmTwo from '../images/blob-sm-2.svg';
import BlobLgOne from '../images/blob-lg-1.svg';
import BlobLgTwo from '../images/blob-lg-2.svg';



class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: navigator.language
    }
  }

  render() {
    const data = defineContentLanguage(this.state.language);
    const content = data.homepage
    const event = data.event
    return (
      <div className="container" id="homepage">
        <SEO title="save the date" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <Header language={this.state.language} color="dark" tagline="text"/>

        <div id="main-content">

          <div id="date">
            <h1 className="accent-text ">{content.date}</h1>
            <h1 className="text-light accent-text">{content.year}</h1>
          </div>

          <ul id="actions">
            <li>
              <Link to="/#" className="text-strong">{content.where}</Link>
            </li>
            <li>
              <Link to="/informations" className="text-strong">{content.how}</Link>
            </li>
            <li>
              <Link to="/#" className="text-strong">{content.frenchPeople}</Link>
            </li>
            <li>
              <Link to="/#" className="text-strong">{content.goodToKnow}</Link>
            </li>
          </ul>

          <Footer language={this.state.language} />

          <BlobSmOne className="blob-sm-one"/>
          <BlobSmTwo className="blob-sm-two"/>
          <BlobLgOne className="blob-lg-one"/>
          <BlobLgTwo className="blob-lg-two"/>

        </div>
        {/* /#main-content */}

      </div>
    )
  }
}



export default IndexPage
