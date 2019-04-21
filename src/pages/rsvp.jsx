import React from 'react';

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
    const base = new Airtable({apiKey: 'keyAOCtPMQ3gzQcWT'}).base('appvBah3imDtdNXOz');

    base('rsvp').create({
      nom: rsvp.name,
      presence: rsvp.presence,
      nbre: rsvp.numberOfPeople,
      commentaire: rsvp.comment
    }, function(err, record) {
        if (err) { console.error(err); return; }
        console.log(record.getId());
    });
  }

  handleClick = () => {
    console.log('prout')
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const rsvp = {
      name: this.refs.name.value,
      presence: this.refs.presence.value === "oui" ? true : false,
      numberOfPeople: parseInt(this.refs.nbre.value, 10) ,
      comment: this.refs.comment.value,
    }
    console.log(rsvp);
    this.createAirtableRecord(rsvp);
  }


  render() {
    return(
      <div>

      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="nom" ref="name"/>
        <label htmlFor="oui">oui</label>
        <select name="presence" id="presence" ref="presence">
          <option value="oui">oui</option>
          <option value="non">non</option>
        </select>
        <input type="number" placeholder="nombre d'invités" ref="nbre"/>
        <input type="textarea" placeholder="commentaire" ref="comment"/>
        <button>submit</button>
      </form>
      </div>
    )
  }
}

export default RSVP;
