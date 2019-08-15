// external libs
import React from "react";
import { Link } from 'gatsby';


class FormReturnCarpoolWhen extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p> Quand penses-tu être en forme pour partir dimanche? Au pire tu peux dormir dans la voiture :) </p>
        <select name="returnPoolWhen" id="presence" onChange={this.props.onChange}>
          <option default value > -- choisi une option -- </option>
          <option value="dimanche matin">dimanche matin</option>
          <option value="dimanche aprem">dimanche aprem</option>
        </select>
      </div>
    )
  }
}

export default FormReturnCarpoolWhen;
