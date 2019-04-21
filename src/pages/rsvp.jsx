import React from 'react';

import SEO from '../components/seo';

import "../styles/main.scss"

const Airtable = require('airtable');

class RSVP extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      presence: true,
      comment: ''
    }
  }

  createAirtableRecord = (rsvp) => {
    // const API_KEY = process.env.AIRTABLE_API;
    const base = new Airtable({apiKey: 'keyAOCtPMQ3gzQcWT'}).base('appvBah3imDtdNXOz');

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


  render() {
    return(
      <div id="rsvp-container">
      <SEO id="rsvp" title="RSVP" keywords={[`save the date`, `application`, `react`]} />
      <h2>RSVP</h2>
      <form onSubmit={this.handleSubmit} id="form-rsvp" action="/">
        <input type="text" placeholder="nom" ref="name"/>
        <select name="presence" id="presence" ref="presence">
          <option value="">serez-vous présent-e ?</option>
          <option value="oui">oui</option>
          <option value="non">non</option>
        </select>
        <input type="email" placeholder="adresse courriel" ref="mail"/>
        <input type="number" placeholder="nombre d'invités" ref="nbre"/>
        <input type="textarea" placeholder="commentaire" ref="comment"/>
        <button>RSVP</button>
      </form>
      </div>
    )
  }
}

export default RSVP;
