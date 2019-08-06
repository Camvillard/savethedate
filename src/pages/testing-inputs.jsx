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

class TestingInputs extends React.Component {

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
    // console.log('value', e.target.value)
    // console.log('name', e.target.name)
    this.setState({
      [`${e.target.name}`]: e.target.value
    })
  };

  render() {
    return(
      <div id="rsvp-container">

        <SEO
          title="RSVP"
          keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
        />


        <form onSubmit={this.handleSubmit} id="form-rsvp" action="/success">
          <input type="text" placeholder="nom, prénom, etc" ref="name"/>
          <InputCar onChange={this.handleChange} />

          <InputCarpooling
            onChange={this.handleChange}
            name="leavingDay"
            id="carpooling-1"
            formElement="radio"
            inputType="radio"
            optionsForSelect="oui, non"
            label="when are you leaving montreal ?"
            step="2"
            />

          <InputCarpooling
            onChange={this.handleChange}
            name="hasACar"
            id="carpooling-1"
            formElement="input"
            inputType="text"
            label="how many people"
            step="1"
            />

          <InputCarpooling
            onChange={this.handleChange}
            name="leavingDay"
            id="carpooling-1"
            formElement="select"
            inputType="text"
            optionsForSelect="friday,saturday,sunday"
            label="when are you leaving montreal ?"
            step="2"
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

export default TestingInputs;

