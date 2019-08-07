import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
// import InputCar from "../components/input-car";
// import InputPlaces from "../components/input-places";
// import InputCarpoolingOne from "../components/input-carpooling-one";
import InputCarpooling from "../components/input-carpooling";


import "../styles/main.scss"

// const Airtable = require('airtable');
// const ApiKey = process.env.AIRTABLE_API;

class TestingInputs extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      stepIndex: 0
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('state', this.state)
  };

  handleChange = (e) => {
    this.setState( (prevState, props) => ({
      // stepbefore: prevState.step
      stepIndex: prevState.stepIndex + 1
    }))
    this.setState({
      // this one will  be useful to fill the form
      [`${e.target.name}`]: e.target.value
    })
    console.log('changing')
  };


  goBack = () => {
    this.setState((prevState, props) => ({
      stepIndex: prevState.stepIndex - 1
    }))
  }

  render() {
    return(
      <div id="rsvp-container">

        <SEO
          title="RSVP"
          keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
        />


        <form onSubmit={this.handleSubmit} id="form-rsvp" action="/success" >
          <input type="text" placeholder="nom, prénom, etc" name="name" onBlur={this.handleChange} step="name"/>

          {this.state.stepIndex > 0 && (
            <InputCarpooling
              onChange={this.handleChange}
              name="hasACar"
              id="carpooling-1"
              formElement="radio"
              inputType="radio"
              optionsForSelect="oui,non"
              label="do you have place in your car ?"
              />
            )}

          {this.state.stepIndex > 1 && this.state.hasACar === "oui" && (
            <InputCarpooling
              onBlur={this.handleChange}
              name="numOfPeople"
              id="carpooling-3"
              formElement="input"
              inputType="text"
              label="how many people"
              />
            )}

          {this.state.stepIndex > 1 && this.state.hasACar === "non" && (
            <InputCarpooling
              onChange={this.handleChange}
              name="wantAcovoit"
              id="carpooling-dfg"
              formElement="radio"
              inputType="radio"
              optionsForSelect="oui,non"
              label="est-tu interesse-e par un covoit ?"
              />
            )}


          {this.state.stepIndex > 2 && (
            <InputCarpooling
              onChange={this.handleChange}
              name="leavingDay"
              id="carpooling-3"
              formElement="select"
              inputType="text"
              optionsForSelect="friday,saturday,sunday"
              label="when are you leaving montreal ?"
              />
            )}




            <p className="back-button" onClick={this.goBack}>retour en arrière</p>


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

