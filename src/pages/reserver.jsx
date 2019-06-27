// external libs
import React from 'react';
import { Link, navigate } from 'gatsby';

// internal stuff
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';


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
        // window.location.href = "/success"
        navigate("/success", {state: reservation})
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // create the object reservation
    // takes the value of eacj one of the inputs
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
      <div id="reserver-container">

        <SEO
          id="rsvp"
          title="réservation"
          keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
        />

        <Header
          color="light"
        />

        <div className="contact-content">
          <p>étant donné que les deux futurs mariés sont plutôt désorganisés, ce serait assez génial de nous faciliter la tâche un tout petit peu et de nous donner une réponse avant le 15 mai. tous les détails, lieu, etc, de la cérémonie seront bien entendu communiqués très très vite.</p>
        </div>

        <form onSubmit={this.handleSubmit} id="form-rsvp">
          <input type="text" placeholder="nom, prénom, etc" ref="name"/>
          <input type="email" placeholder="adresse mail" ref="mail"/>
          <input type="text" placeholder="nombre de personnes" ref="people"/>
          <textarea name="msg" ref="message" placeholder="commentaire pertinent éventuel"></textarea>
          <button className="button-send">réserver</button>
        </form>

        <div id="footer-title">
          <h3>rsvp</h3>
          <Link to="/">retour au site</Link>
        </div>

      </div>
    )
  }
}

export default ReservationPage;
