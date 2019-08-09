// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import Header from "../components/header";
import SEO from '../components/seo';

//form-components
import FormHasACar from "../components/form-covoit/form-has-a-car";
import FormHowMany from "../components/form-covoit/form-how-many";
import FormCarPool from "../components/form-covoit/form-car-pool";
import FormComeWhen from "../components/form-covoit/form-come-when";
import FormPickupPlace from "../components/form-covoit/form-pickup-place";
import FormReturn from "../components/form-covoit/form-return";
import FormReturnWhen from "../components/form-covoit/form-return-when";
import FormReturnQty from "../components/form-covoit/form-return-qty";
import FormCarpoolQty from "../components/form-covoit/form-carpool-qty";
import FormCarpoolWhen from "../components/form-covoit/form-carpool-when";
import FormReturnCovoit from "../components/form-covoit/form-return-covoit";
import FormReturnCarpoolQty from "../components/form-covoit/form-return-carpool-qty";
import FormReturnCarpoolWhen from "../components/form-covoit/form-return-carpool-when";

import FormBtnSubmit from "../components/form-covoit/form-btn-submit";
import FormBusLien from "../components/form-covoit/form-bus-lien";



// style & assets
import "../styles/main.scss"

const Airtable = require('airtable');
// const ApiKey = process.env.AIRTABLE_API;


class Covoiturage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasACar: null,
      howMany: 0,
      comeWhen: "",
      placePickUp: "",
      returnWay: null,
      carPool: null,
      howManyPool: 0,
      comeWhenPool: "",
      returnWayPool: null,
      returnWhen: "",
      returnHowMany: 0,
      returnPoolQty: 0,
      returnPoolWhen: ""
    }
  }

  createAirtableRecord = (covoiturage) => {
    // for each new rsvp received, create a new record
    const ApiKey = process.env.GATSBY_AIRTABLE_API_KEY;
    const base = new Airtable({apiKey: ApiKey}).base('appvBah3imDtdNXOz');

    base('covoiturage').create({
      // create new record in airtable base
      // using key/value pairs
      // based on columns name in airtable sheet
      nom: covoiturage.name,
      driver: covoiturage.driver,
      qty: covoiturage.qty,
      date: covoiturage.date,
      return: covoiturage.return,
      returnQty: covoiturage.returnQty,
      returnWhen: covoiturage.returnWhen,
      covoiturage: covoiturage.covoiturage
    }, function(err, record) {
        if (err) { console.error(err); return; }
        // redirect to a yay or not yay page
        // depending on the given answer

    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const covoiturage = {
      // grab value from the form
      // using ref attribute
      name: this.refs.name.value,
      driver: this.refs.driver.value === "oui" ? true : false,
      qty: this.refs.qty.value,
      date: this.refs.date.value,
      return: this.refs.return.value === "oui" ? true : false,
      returnQty: this.refs.returnQty.value,
      returnWhen: this.refs.returnWhen.value,
      covoiturage: this.refs.covoiturage.value === "oui" ? true : false
    }
    this.createAirtableRecord(covoiturage);
  }

  handleCar = (e) => {
    console.log(e.target.value)
    if (e.target.value === "oui") {
      this.setState({ hasACar: true})
    } else {
      this.setState({ hasACar: false})
    }
  }

  handleQty = (e) => {
    console.log(e.target.value)
    this.setState({howMany: e.target.value});
  }

  handleWhen = (e) => {
    console.log(e.target.value)
    this.setState({comeWhen: e.target.value});
  }

  handleWhere = (e) => {
    console.log(e.target.value)
    this.setState({placePickUp: e.target.value})
  }

  handleReturn = (e) => {
    console.log(e.target.value)
    if (e.target.value === "oui") {
      this.setState({returnWay: true})
    } else {
      this.setState({returnWay: false})
    }
  }

  handleReturnWhen = (e) => {
    console.log(e.target.value)
    this.setState({returnWhen: e.target.value});
  }

  handleReturnQty = (e) => {
    console.log(e.target.value)
    this.setState({returnHowMany: e.target.value})
  }

  handleCarPool = (e) => {
    console.log(e.target.value)
    if (e.target.value === "oui") {
      this.setState({carPool: true})
    } else {
      this.setState({carPool: false})
    }
  }

  handlePoolQty = (e) => {
    console.log(e.target.value)
    this.setState({howManyPool: e.target.value})
  }

  handlePoolWhen = (e) => {
    console.log(e.target.value)
    this.setState({comeWhenPool: e.target.value})
  }

  handlePoolReturn = (e) => {
    console.log(e.target.value)
    if (e.target.value === "oui") {
      this.setState({returnWayPool: true})
    } else {
      this.setState({returnWayPool: false})
    }
  }

  handlePoolReturnQty = (e) => {
    console.log(e.target.value)
    this.setState({returnPoolQty: e.target.value})
  }

  handlePoolReturnWhen = (e) => {
    console.log(e.target.value)
    this.setState({returnPoolWhen: e.target.value})
  }


  render() {
    if(this.state.hasACar) {
      console.log("HasACar");
      return(
          <React.Fragment>
          <div className="container-fullpage" id="covoit-container">
            <SEO
              title="RSVP"
              keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
            />
            <Header
              color="light"
              position="regular"
              navbarColor="yellow"
            />
            <div className="small-container">
              <h2 className="page-title white"><span>transports</span></h2>
              <p className="page-content white"> texte á venir</p>
              <form onSubmit={this.handleSubmit} action="/success" className="form-stroked form-white">
                <input type="text" placeholder="nom, prénom, etc" ref="name"/>
                <div className="covoit-form-container">
                  <FormHasACar onChange={this.handleCar} />

                    <FormHowMany onChange={this.handleQty} />

                    {this.state.howMany === ('')}

                    {this.state.howMany > 0  && (<FormComeWhen onChange={this.handleWhen} />)}

                    {this.state.comeWhen === ('')}

                    {this.state.comeWhen !== ('') && (<FormPickupPlace onChange={this.handleWhere} />)}

                    {this.state.placePickUp === ('')}

                    {this.state.placePickUp !== ('') && (<FormReturn onChange={this.handleReturn} />)}

                    {this.state.returnWay === null && ('')}
                </div>
              </form>
            </div>
          </div>
          </React.Fragment>
          );
    // } else if(this.state.returnWay) {
    //   console.log("yes for the return");
    //   return(
    //       <React.Fragment>
    //         <FormReturnWhen onChange={this.handleReturnWhen} />
    //         {this.state.returnWhen !== ('') && (<FormReturnQty onChange={this.handleReturnQty} />)}
    //         {this.state.returnHowMany === ('')}
    //         {this.state.returnHowMany > 0 && (<FormBtnSubmit />)}
    //       </React.Fragment>
    //   );
    // } else if(this.state.returnWay ===  false) {
    //   console.log("no for the return");
    //   return(
    //   {this.state.returnWay === false && (<FormBtnSubmit />)}
    //   );
    } else {
      console.log("Does not have a car")
      return(
        <React.Fragment>
        <div className="container-fullpage" id="covoit-container">
          <SEO
            title="RSVP"
            keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
          />
          <Header
            color="light"
            position="regular"
            navbarColor="yellow"
          />
          <div className="small-container">
            <h2 className="page-title white"><span>transports</span></h2>
            <p className="page-content white"> texte á venir</p>
            <form onSubmit={this.handleSubmit} action="/success" className="form-stroked form-white">
              <input type="text" placeholder="nom, prénom, etc" ref="name"/>
              <div className="covoit-form-container">
                <FormHasACar onChange={this.handleCar} />

                  {this.state.hasACar === false && (<FormCarPool onChange={this.handleCarPool} />)}


                  {this.state.carPool === null && ('')}

                  {this.state.carPool && (<FormCarpoolQty onChange={this.handlePoolQty} />)}

                  {this.state.carPool === false && (<FormBusLien />)}


                  {this.state.howManyPool === ('')}

                  {this.state.howManyPool > 0  && (<FormCarpoolWhen onChange={this.handlePoolWhen} />)}


                  {this.state.comeWhenPool === ('')}

                  {this.state.comeWhenPool !== ('') && (<FormReturnCovoit onChange={this.handlePoolReturn} />)}


                  {this.state.returnWayPool === null && ('')}

                  {this.state.returnWayPool && (<FormReturnCarpoolQty onChange={this.handlePoolReturnQty} />)}

                  {this.state.returnWayPool === false && (<FormBtnSubmit />)}


                  {this.state.returnPoolQty === ('')}

                  {this.state.returnPoolQty > 0 && (<FormReturnCarpoolWhen onChange={this.handlePoolReturnWhen} />)}

                  {this.state.returnPoolWhen === ('')}

                  {this.state.returnPoolWhen !== ('') && (<FormBtnSubmit />)}
              </div>
            </form>
          </div>
        </div>
        </React.Fragment>
      );
    }
  }




export default Covoiturage;
