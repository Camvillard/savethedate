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

  constructor(props) {
    super(props);
    this.state = {
      language: navigator.language
    }
  }

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
    const data = defineContentLanguage(this.state.language).contact;
    return(
      <div id="contact-container" className="container-fullheight">
        <SEO title="Nous contacter" id="contact" />

        <Header
          language={this.state.language}
          color="light"
          position="regular"
        />

        <div className="contact-content">
          <p className="text-normal">{data.tagline}</p>
        </div>

        <form id="contact-form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" type="text" placeholder={`${data.name}`} ref="name"/>
          <input name="name" type="email" placeholder={`${data.mail}`} ref="mail"/>
          <input name="objet" type="text" placeholder={`${data.subject}`} ref="objet"/>
          <textarea name="msg" placeholder={`${data.body}`} ref="body"></textarea>
          <button className="button-send">{data.send}</button>
        </form>

        <div id="footer-title">
          <h3>contact</h3>
          <Link to="/">{data.backToSite}</Link>
        </div>

      </div>
    )
  }

}


export default ContactPage;


