import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../components/header'

import "../styles/main.scss"

const Airtable = require('airtable');
// const ApiKey = process.env.AIRTABLE_API;

class RSVP extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      flags: []
    }
  }

  createAirtableRecord = (rsvp) => {
    const ApiKey = process.env.GATSBY_AIRTABLE_API_KEY;
    const AirtableTable = process.env.AIRTABLE_TABLE_RSVP;
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
        flags: navigator.languages
      })
  };


  render() {
    return(
      <div id="rsvp-container">

        <SEO
          id="rsvp"
          title="RSVP"
          keywords={[`save the date`, `application`, `react`]}
        />

        <Header
          language={this.state.language}
          flags={this.state.flags}
          color="light"
          tagline="19/10/2019"
        />

        <div className="contact-content">
          <p>étant donné que les deux futurs mariés sont plutôt désorganisés, ce serait assez
        génial de nous faciliter la tâche un tout petit peu et de nous donner une réponse avant le 15 mai.
        tous les détails, lieu, etc, de la cérémonie seront bien entendu communiqués très très vite.
        </p>
        </div>



        <form onSubmit={this.handleSubmit} id="form-rsvp" action="/success">
          <input type="text" placeholder="nom" ref="name"/>
          <select name="presence" id="presence" ref="presence">
            <option value="">serez-vous présent-e ?</option>
            <option value="oui">oui</option>
            <option value="non">non</option>
          </select>
          <input type="email" placeholder="adresse courriel" ref="mail"/>
          <input type="number" placeholder="nombre d'invités" ref="nbre"/>
          <input type="textarea" placeholder="commentaire" ref="comment"/>
          <button className="button-send">RSVP</button>
        </form>

        <div id="footer-title">
          <h3>rsvp</h3>
          <Link to="/">retour à l'accueil</Link>
        </div>

      </div>
    )
  }
}

export default RSVP;

