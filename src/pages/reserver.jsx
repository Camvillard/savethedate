// external libs
import React from 'react';
import { navigate } from 'gatsby';

// internal stuff
import SEO from '../components/seo';
import Navbar from "../components/navbar";


// style & assets
import "../styles/main.scss"

const Airtable = require('airtable');
// const ApiKey = process.env.AIRTABLE_API;

class ReservationPage extends React.Component {

  createAirtableRecord = (reservation) => {
    // Airtable settings
    const ApiKey = process.env.GATSBY_AIRTABLE_API_KEY;
    const base = new Airtable({apiKey: ApiKey}).base('appvBah3imDtdNXOz');

    base('chalets').create({
      nom: reservation.name,
      mail: reservation.mail,
      places: reservation.people,
      message: reservation.message
    }, function(err, record) {
        if (err) { console.error(err); return; }
        // redirect to a success page + possible paiement
        // passing the reservation as information
        navigate("/payer", {state: {reservation}})
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // create the object reservation
    // takes the value of each one of the inputs
    // to passe them to the corresponding key in the table
    const reservation = {
      name: this.refs.name.value,
      mail: this.refs.mail.value,
      people: this.refs.people.value,
      message: this.refs.message.value,
    }
    // finally, create the record with the obj reservation
    this.createAirtableRecord(reservation);
  }

  render() {
    return(
      <React.Fragment>
        <SEO
          title="réservation"
          keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
        />

        <div id="page-reservation" className="container-fullpage">

          <Navbar
            linksColor="white"
            bgColor="green"
            sidebarColor="white"
            toggleColor="white"
          />

          <div className="main-container small">

            <h2 className="page-title white"><span>réserver l'hébergement</span></h2>
            <p className="page-content white">
              il y a environ une soixantaine de places disponibles dans les chalets et nous vous demandons une (toute petite) participation financière de 80 $ par personne pour le weekend, s’il vous plait. <br/> vous seriez fantastiques si vous répondiez avant le 7 septembre (pour l'anniversaire de Camille), mais bon, comme il y a sûrement des  gens en vacances (ou des cancres refusant l'autorité des deadlines), disons que si on pouvait avoir une réponse (et le paiement) avant le 15 septembre, ce serait bien.
            </p>

            <form onSubmit={this.handleSubmit} id="form-reserver" className="form-stroked form-white">
              <input type="text" placeholder="nom, prénom, etc" ref="name"/>
              <input type="email" placeholder="adresse mail" ref="mail"/>
              <input type="text" placeholder="nombre de personnes" ref="people"/>
              <textarea name="msg" ref="message" placeholder="commentaire pertinent éventuel"></textarea>
              <button className="button-send">réserver</button>
            </form>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default ReservationPage;

