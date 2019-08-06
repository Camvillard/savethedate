import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../components/header';
import InputCar from "../components/input-car";
import InputPlaces from "../components/input-places";
import InputCarpoolingOne from "../components/input-carpooling-one";
import InputCarpooling from "../components/input-carpooling";

import content from '../data/content';
// import { defineContentLanguage } from '../helpers/helpers';

import "../styles/main.scss"

const Airtable = require('airtable');
// const ApiKey = process.env.AIRTABLE_API;

class RSVP extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      hasACar: null,
      hasPlace: false,
      numPlaces: false,
    }
  }



  handleSubmit = (event) => {
    event.preventDefault();
    // const rsvp = {
    //   // grab value from the form
    //   // using ref attribute
    //   name: this.refs.name.value,
    //   car: this.refs.hasACar.value,
    // }
    console.log(this.state)
    // this.createAirtableRecord(rsvp);
  };

  handleChange = (e) => {
    console.log('value', e.target.value)
    console.log('name', e.target.name)
  };


  handleCar = (e) => {
    console.log(e.target.value)
    if (e.target.value === "yes") {
      this.setState({ hasACar: true})
    } else {
      this.setState({ hasACar: false})
    }
  };

  render() {
    return(
      <div id="rsvp-container">

        <SEO
          title="RSVP"
          keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
        />

        <Header
          color="light"
        />

        <div className="contact-content">
          <p>rsvp</p>
        </div>

        <form onSubmit={this.handleSubmit} id="form-rsvp" action="/success">
          <input type="text" placeholder="nom, prénom, etc" ref="name"/>
          <InputCar onChange={this.handleCar} />


          <InputCarpooling
            onChange={this.handleChange}
            name="carpooling-1"
            id="carpooling-1"
            formElement="input"
            inputType="text"
            optionsForSelect="friday,saturday,sunday"
            label="how many people"
            />



          <button className="button-send">RSVP</button>
        </form>

        <div id="footer-title">
          <h3>rsvp</h3>
          <Link to="/">retour au site</Link>
        </div>

      </div>
    )
  }
}

export default RSVP;

