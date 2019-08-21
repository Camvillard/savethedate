// external libs
import React from "react";

// internal stuff
import Navbar from "../components/navbar";
import SEO from '../components/seo';

// style & assets
import BlobOne from "../images/blob_homepage-2.svg";
import BlobTwo from "../images/blob_homepage-1.svg";

import "../styles/main.scss"


class BienRecu extends React.Component {
  render() {
    return(
      <React.Fragment>
      <SEO id="merci" title="Merci beaucoup" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

      <div id="bien-recu" className="container-fullpage" >
        <Navbar
          linksColor="white"
          bgColor="yellow"
          sidebarColor="yellow"
        />

        <div className="main-container">

          <h1>bien reçu !</h1>
          <p>on note les besoins / disponibilités et on vous dit (plus ou moins) rapidement avec qui vous serez pour le trajet.</p>

        </div>


      </div>

      <BlobOne id="blob-1" />
      <BlobTwo id="blob-2" />

      </React.Fragment>
    )
  }
}

export default BienRecu;
