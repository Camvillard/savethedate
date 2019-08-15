// external libs
import React from "react";
import { Link } from 'gatsby';


class FormReturnWhen extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p> Quand penses-tu être en forme pour partir dimanche ? :) </p>
        <select name="returnWhen" id="presence" onChange={this.props.onChange}>
          <option default value> -- choisi une option -- </option>
          <option value="dimanche matin">dimanche matin</option>
          <option value="dimanche aprem">dimanche aprem</option>
        </select>
      </div>
    )
  }
}

export default FormReturnWhen;
