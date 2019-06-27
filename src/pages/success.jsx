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

  render() {
    // const numOfPeople = this.props.location.state.people
    const numOfPeople = 2
    return(
      <div id="success-page" className="main-container">
        <SEO id="success" title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <Header color="dark" position="fixed"/>

        {/* JSX Comment <Blob id="resa-blob"/>*/}

        <h1>todo bueno</h1>
        <h5>et merci mucho mucho !<br/>on prend note et on vous réserve {numOfPeople} places.</h5>
        <p>afin d'être tout à fait tranquilles jusqu'au jour J, vous pouvez payer tout de suite vos places (que la technologie est pratique).</p>
        <a href="https://www.paypal.me/CamilleVillard" className="button-green">mais oui, payer maintenant</a>

        {/* links */}
        <Footer />
        {/* links */}

      </div>
    )
  }
}

export default SuccessPage;
