// external libs
import React from "react";
import { Link } from 'gatsby';


class FormComeWhen extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p> Quand peux-tu prendre les passagers? </p>
        <select name="comeWhen" id="presence" onChange={this.props.onChange}>
          <option default value > -- choisi une option -- </option>
          <option value="vendredi matin">vendredi matin</option>
          <option value="vendredi aprem">vendredi aprem</option>
          <option value="samedi matin">samedi matin</option>
        </select>
      </div>
    )
  }
}

export default FormComeWhen;
