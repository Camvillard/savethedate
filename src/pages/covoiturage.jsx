// external libs
import React from "react";

// internal stuff
import Header from "../components/header";
import SEO from '../components/seo';


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
      <React.Fragment>
      <div className="container-fullpage" id="covoit-container">

        <SEO
          title="RSVP"
          keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
        />

        <Header
          color="light"
          position="regular"
          navbarColor="yellow"
        />

        <div className="main-container small">

          <h2 className="page-title white"><span>transports</span></h2>
          <p className="page-content white"> texte á venir</p>

          <form onSubmit={this.handleSubmit} action="/success" className="form-stroked form-white">
            <input type="text" placeholder="nom, prénom, etc" ref="name"/>


            <div className="covoit-form-container">
              <div className="covoit-form">
                <p> As-tu une voiture à disposition? </p>

                <div className="covoit-radio-btn">
                  <label className="radio-btn-style"> oui
                    <input type="radio" ref="driver"name="driver" value="oui"/>
                    <span className="radio-btn-span"></span>
                  </label>
                </div>

                <div className="covoit-radio-btn">
                  <label className="radio-btn-style"> non
                    <input type="radio" ref="driver" name="driver" value="non"/>
                    <span className="radio-btn-span"></span>
                  </label>
                </div>
              </div>

              <div className="covoit-form">
                <p>Es-tu intéressé par le covoiturage?</p>

                <div className="covoit-radio-btn">
                  <label className="radio-btn-style"> oui
                    <input type="radio" ref="covoiturage"name="covoiturage" value="oui"/>
                    <span className="radio-btn-span"></span>
                  </label>
                </div>

                <div className="covoit-radio-btn">
                  <label className="radio-btn-style"> non
                    <input type="radio" ref="covoiturage" name="covoiturage" value="non"/>
                    <span className="radio-btn-span"></span>
                  </label>
                </div>
              </div>

              <div className="covoit-form">
                <p> Vous êtes combien? </p>
                <input type="text" placeholder="combien de personnes" ref="qty"/>
              </div>

              <div className="covoit-form">
                <p> Vous voulez arriver quand? </p>
                <select name="date" id="presence" ref="date">
                  <option disabled selected value> -- choisi une option -- </option>
                  <option value="vendredi matin">vendredi matin</option>
                  <option value="vendredi aprem">vendredi aprem</option>
                  <option value="samedi matin">samedi matin</option>
                </select>
              </div>

              <div className="covoit-form">
                <p> As-tu besoin la coivoit pour la route de retour?  </p>

                <div className="covoit-radio-btn">
                  <label className="radio-btn-style"> oui
                    <input type="radio" ref="return"name="return" value="oui"/>
                    <span className="radio-btn-span"></span>
                  </label>
                </div>

                <div className="covoit-radio-btn">
                  <label className="radio-btn-style"> non
                    <input type="radio" ref="return" name="return" value="non" />
                    <span className="radio-btn-span"></span>
                  </label>
                </div>
              </div>

              <div className="covoit-form">
                <p> Dans ce cas-là, on recommence:  </p>
                <p> Vous êtes combien? </p>
                <input type="text" placeholder="combien de personnes" ref="returnQty"/>
              </div>

              <div className="covoit-form">
                <p> Vous voulez partir quand? </p>
                <select name="returnWhen" id="presence" ref="returnWhen">
                  <option disabled selected value> -- choisi une option -- </option>
                  <option value="dimanche matin">dimanche matin</option>
                  <option value="dimanche aprem">dimanche aprem</option>
                </select>
              </div>

              <button className="button-send">envoyer ta demande de covoit</button>
            </div>
          </form>

        </div>

      </div>
      </React.Fragment>
    )
  }
}



export default Covoiturage;
