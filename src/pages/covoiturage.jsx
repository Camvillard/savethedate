// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from '../components/seo';
import content from '../data/content';

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
      returnWhen: covoiturage.returnWhen
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
      return: this.refs.return.value === "oui" ? true :false,
      returnQty: this.refs.returnQty.value,
      returnWhen: this.refs.returnWhen.value
    }
    this.createAirtableRecord(covoiturage);
  }


  render() {
    return(
      <div id="rsvp-container">

        <SEO
          title="RSVP"
          keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
        />

        <Header
          color="light"
        />

        <div className="contact-content">
          <p>transports</p>
        </div>

        <form onSubmit={this.handleSubmit} id="form-rsvp" action="/success">
          <input type="text" placeholder="nom, prénom, etc" ref="name"/>
          <select name="driver" id="presence" ref="driver">
            <option value="oui">oui</option>
            <option value="non">non</option>
          </select>
          <input type="text" placeholder="combien de personnes" ref="qty"/>
          <select name="date" id="presence" ref="date">
            <option disabled selected value> -- choisi une option -- </option>
            <option value="vendredi">vendredi</option>
            <option value="samedi">samedi</option>
          </select>
          <select name="return" id="presence" ref="return" placeholder="retour">
            <option disabled selected value> -- choisi une option -- </option>
            <option value="oui">oui</option>
            <option value="non">non</option>
          </select>
          <input type="text" placeholder="combien de personnes" ref="returnQty"/>
          <select name="returnWhen" id="presence" ref="returnWhen">
            <option disabled selected value> -- choisi une option -- </option>
            <option value="dimanche matin">dimanche matin</option>
            <option value="dimanche aprem">dimanche aprem</option>
          </select>

          <button className="button-send">envoyer ta demande de coivoit</button>
        </form>

        <div id="footer-title">
          <h3>transports</h3>
          <Link to="/">retour au site</Link>
        </div>

      </div>
    )
  }
}



export default Covoiturage;
