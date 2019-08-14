// external libs
import React from "react";
import { Link } from 'gatsby';


class FormPickupPlace extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p> L'endroit idéal pour chercher les covoitureurs? </p>
        <input name="placePickUp" type="text" placeholder="lieu de rdv" onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default FormPickupPlace;
