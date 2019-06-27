// external ressources
import React from "react";
import { Link } from 'gatsby';

// internal data
import SEO from "../components/seo";
import Header from '../components/header';

import { defineContentLanguage } from '../helpers/helpers';

// styles
import "../styles/main.scss";

const Airtable = require('airtable');

class ContactPage extends React.Component {


  createAirtableContactRecord = (message) => {
    // creates a new record in airtable 'contact' base
    const ApiKey = process.env.GATSBY_AIRTABLE_API_KEY;
    const base = new Airtable({apiKey: ApiKey}).base('appvBah3imDtdNXOz');

    base('contact').create({
      name: message.name,
      mail: message.mail,
      message: message.body
    }, function(err, record) {
        if (err) { console.error(err); return; }
        // redirect to a thank you page
        window.location.href = "/merci"
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: this.refs.name.value,
      mail: this.refs.mail.value,
      body: this.refs.body.value
    }
    console.log(contact)
    this.createAirtableContactRecord(contact);
  }

  render() {
    return(
      <div id="contact-container" className="container-fullheight">
        <SEO title="Nous contacter" id="contact" />

        <Header
          color="light"
          position="regular"
        />

        <div className="contact-content">
          <p className="text-normal">si vous avez des trucs à nous demander, ne soyez pas insolents, n'utilisez pas le téléphone (ou alors appelez Alex). Étant donné qu'on est supposément débordés par la préparation de ce mariage, ne vous inquiétez pas si nous mettons plus de 48 heures à vous répondre. Si toutefois vous n'avez pas de réponse au bout d'une semaine, vous êtes en droit de gentiment nous harceler.</p>
        </div>

        <form id="contact-form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" type="text" placeholder="nom, prénom, etc" ref="name"/>
          <input name="name" type="email" placeholder="adresse mail" ref="mail"/>
          <input name="objet" type="text" placeholder="objet de ce message" ref="objet"/>
          <textarea name="msg" placeholder="message" ref="body"></textarea>
          <button className="button-send">envoyer le message</button>
        </form>

        <div id="footer-title">
          <h3>contact</h3>
          <Link to="/">retour à l'accueil</Link>
        </div>

      </div>
    )
  }

}


export default ContactPage;


