import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../components/header'

import content from '../data/content';
import { defineContentLanguage } from '../helpers/helpers';

import "../styles/main.scss"

const Airtable = require('airtable');
// const ApiKey = process.env.AIRTABLE_API;

class RSVP extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: ''
    }
  }

  createAirtableRecord = (rsvp) => {
    const ApiKey = process.env.GATSBY_AIRTABLE_API_KEY;
    const AirtableTable = process.env.AIRTABLE_TABLE_19;
    console.log(ApiKey);
    const base = new Airtable({apiKey: ApiKey}).base('appvBah3imDtdNXOz');

    base('rsvp').create({
      nom: rsvp.name,
      presence: rsvp.presence,
      mail: rsvp.mail,
      nbre: rsvp.numberOfPeople,
      commentaire: rsvp.comment
    }, function(err, record) {
        if (err) { console.error(err); return; }
        console.log(record.getId());
        window.location.href = "/"
    });
  }

  handleClick = () => {
    console.log('prout')
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const rsvp = {
      name: this.refs.name.value,
      mail: this.refs.mail.value,
      presence: this.refs.presence.value === "oui" ? true : false,
      numberOfPeople: parseInt(this.refs.nbre.value, 10) ,
      comment: this.refs.comment.value,
    }
    console.log(rsvp);
    this.createAirtableRecord(rsvp);
  }

  componentDidMount() {
    // set the language accordingly with the browsers language
    this.setLanguageVersion(window.navigator.language);
  }

  //changes languages depending on the browser preferences
  setLanguageVersion = (language) => {
      this.setState({
        language: language,
        inputState: ''
      })
  };

  handleBlur = () => {
    this.setState({
      inputState: 'blur'
    })
  }

  render() {
    const data = defineContentLanguage(this.state.language, content);
    return(
      <div id="rsvp-container">

        <SEO
          id="rsvp"
          title="RSVP"
          keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
        />

        <Header
          language={this.state.language}
          flags={this.state.flags}
          color="light"
          tagline="date"
        />

        <div className="contact-content">
          <p>{data.rsvpTagLine}</p>
        </div>

        <form onSubmit={this.handleSubmit} id="form-rsvp" action="/success">
          <input type="text" placeholder={`${data.contactName}`} ref="name"/>
          <select name="presence" id="presence" ref="presence">
            <option value="oui">{data.rsvpYes}</option>
            <option value="non">{data.rsvpNo}</option>
          </select>
          <input type="email" placeholder={`${data.contactMail}`} ref="mail"/>
          <input type="number" placeholder={`${data.rsvpNumber}`} ref="nbre"/>
          <input type="textarea" placeholder={`${data.rsvpComment}`} ref="comment"/>
          <button className="button-send">RSVP</button>
        </form>

        <div id="footer-title">
          <h3>rsvp</h3>
          <Link to="/">{data.backToSite}</Link>
        </div>

      </div>
    )
  }
}

export default RSVP;

