// external libs
import React from 'react';
import { Link } from 'gatsby'

// internal stuff
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from '../components/footer';

import { defineContentLanguage } from '../helpers/helpers'

// style & assets
import Blob from '../images/resa-blob-1.svg';

import '../styles/main.scss';

class SuccessPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      language: navigator.language
    }
  }


  render() {
    const numOfPeople = this.props.location.state.people
    const data = defineContentLanguage(this.state.language).success;
    return(
      <div id="landing-page" className="main-container">
        <SEO id="success" title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <Header language={this.state.language} color="dark" position="fixed"/>

        <Blob id="resa-blob"/>

        <h1>{data.header}</h1>
        <h5>{data.subtitle}<br/>on prend note et on vous réserve {numOfPeople} places.</h5>
        <p>{data.content}</p>
        <a href="https://www.paypal.me/CamilleVillard" className="button-green">mais oui, payer maintenant</a>

        {/* links */}
        <Footer />
        {/* links */}

      </div>
    )
  }
}

export default SuccessPage;
