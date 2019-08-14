// external libs
import React from "react";
import { Link } from 'gatsby';


class FormCarpoolWhen extends React.Component {

  render() {
    return(
      <div className="covoit-form hidden-input">
        <p> Quand pensez-vous être prêts pour partir au chalet? Idéalement vendredi ... :) </p>
        <select name="comeWhenPool" id="presence" ref="comeWhenPool" onChange={this.props.onChange}>
          <option default value > -- choisi une option -- </option>
          <option value="vendredi matin">vendredi matin</option>
          <option value="vendredi aprem">vendredi aprem</option>
          <option value="samedi matin">samedi matin</option>
        </select>
      </div>
    )

  }
}



export default FormCarpoolWhen;
