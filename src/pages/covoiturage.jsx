// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from '../components/seo';
import content from '../data/content';
import Navbar from "../components/navbar";

// style & assets
import "../styles/main.scss"

const Airtable = require('airtable');
// const ApiKey = process.env.AIRTABLE_API;


class Covoiturage extends React.Component {


  createAirtableRecord = (covoiturage) => {
    // for each new rsvp received, create a new record
    const ApiKey = process.env.GATSBY_AIRTABLE_API_KEY;
    const base = new Airtable({apiKey: ApiKey}).base('appvBah3imDtdNXOz');

    base('covoiturage').create({
      // create new record in airtable base
      // using key/value pairs
      // based on columns name in airtable sheet
      nom: covoiturage.name,
      driver: covoiturage.driver,
      qty: covoiturage.qty,
      date: covoiturage.date,
      return: covoiturage.return,
      returnQty: covoiturage.returnQty,
      returnWhen: covoiturage.returnWhen,
      covoiturage: covoiturage.covoiturage
    }, function(err, record) {
        if (err) { console.error(err); return; }
        // redirect to a yay or not yay page
        // depending on the given answer

    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const covoiturage = {
      // grab value from the form
      // using ref attribute
      name: this.refs.name.value,
      driver: this.refs.driver.value === "oui" ? true : false,
      qty: this.refs.qty.value,
      date: this.refs.date.value,
      return: this.refs.return.value === "oui" ? true : false,
      returnQty: this.refs.returnQty.value,
      returnWhen: this.refs.returnWhen.value,
      covoiturage: this.refs.covoiturage.value === "oui" ? true : false
    }
    this.createAirtableRecord(covoiturage);
  }


  render() {
    return(
      <div className="container-fullpage" id="covoit-container">

        <SEO
          title="RSVP"
          keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
        />

        <Header
          color="light"
        />


        <Navbar bgColor="green" />

        <div className="page-container contact-container small-container">

          <h2 className="page-title"><span>transports</span></h2>
          <p className="page-content"> texte á venir</p>


          <form onSubmit={this.handleSubmit} action="/success" className="form-stroked form-white">

            <div>
            <input type="text" placeholder="nom, prénom, etc" ref="name"/>
            </div>

            <div>
            <p> As-tu une voiture à disposition? </p>
            <input type="radio" ref="driver"name="driver" value="oui"/> Oui
            <input type="radio" ref="driver" name="driver" value="non"/> Non
            </div>

            <div>
            <p>Es-tu intéressé par le covoiturage?</p>
            <input type="radio" ref="covoiturage"name="covoiturage" value="oui"/> Oui
            <input type="radio" ref="covoiturage" name="covoiturage" value="non"/> Non
            </div>

            <div>
            <p> Vous êtes combien? </p>
            <input type="text" placeholder="combien de personnes" ref="qty"/>
            </div>

            <div>
            <p> Vous voulez arriver quand? </p>
            <select name="date" id="presence" ref="date">
              <option disabled selected value> -- choisi une option -- </option>
              <option value="vendredi matin">vendredi matin</option>
              <option value="vendredi aprem">vendredi aprem</option>
              <option value="samedi matin">samedi matin</option>
            </select>
            </div>

            <div>
            <p> As-tu besoin la coivoit pour la route de retour?  </p>
            <input type="radio" ref="return"name="return" value="oui"/> Oui
            <input type="radio" ref="return" name="return" value="non"/> Non
            </div>

            <div>
            <p> Dans ce cas-là, on recommence:  </p>
            <p> Vous êtes combien? </p>
            <input type="text" placeholder="combien de personnes" ref="returnQty"/>
            <p> Vous voulez partir quand? </p>
            <select name="returnWhen" id="presence" ref="returnWhen">
              <option disabled selected value> -- choisi une option -- </option>
              <option value="dimanche matin">dimanche matin</option>
              <option value="dimanche aprem">dimanche aprem</option>
            </select>
            </div>

            <button className="button-send">envoyer ta demande de coivoit</button>
          </form>
        </div>
        <div id="footer-title">
          <h3>transports</h3>
          <Link to="/">retour au site</Link>
        </div>

      </div>
    )
  }
}



export default Covoiturage;
