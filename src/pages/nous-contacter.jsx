// external ressources
import React from "react";
import { Link } from 'gatsby';

// internal data
import SEO from "../components/seo";
import Header from '../components/header';

import content from '../data/content';
import { defineContentLanguage } from '../helpers/helpers';

// styles
import "../styles/main.scss";

const Airtable = require('airtable');

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      flags: []
    }
  }

  componentDidMount() {
    // set the language accordingly with the browsers language
    this.setLanguageVersion(window.navigator.language);
  }

  //changes languages depending on the browser preferences
  setLanguageVersion = (language) => {
      this.setState({
        language: language,
        flags: navigator.languages
      })
  }

  createAirtableContactRecord = (message) => {
    const ApiKey = process.env.GATSBY_AIRTABLE_API_KEY;
    const base = new Airtable({apiKey: ApiKey}).base('appvBah3imDtdNXOz');

    base('contact').create({
      name: message.name,
      mail: message.mail,
      message: message.body
    }, function(err, record) {
        if (err) { console.error(err); return; }
        console.log(record.getId());
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
    const data = defineContentLanguage(this.state.language, content);
    return(
      <div id="contact-container">
        <SEO title="Nous contacter" id="contact" />

        <Header
          language={this.state.language}
          flags={this.state.flags}
          color="light"
          tagline="19/10/2019"
        />

        <div className="contact-content">
          <p className="text-normal">{data.contactTagline}</p>
        </div>
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" type="text" placeholder={`${data.contactName}`} ref="name"/>
          <input name="name" type="email" placeholder={`${data.contactMail}`} ref="mail"/>
          <input name="objet" type="text" placeholder={`${data.contactSubject}`} ref="objet"/>
          <input name="message" type="textarea" placeholder={`${data.contactBody}`} ref="body"/>
          <button className="button-send">{data.contactSend}</button>
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


