// external libs
import React from 'react';

// internal stuff
import { defineContentLanguage } from '../helpers/helpers';
import Header from "../components/header";

// style & assets
import "../styles/main.scss"

class Location extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: navigator.language
    }
  };

  render(){
    const data = defineContentLanguage(this.state.language).informations;
    return(
      <div id="location-page">
        <Header language={this.state.language} color="dark"/>
        c'est ici
      </div>
    )
  }
}

export default Location;
