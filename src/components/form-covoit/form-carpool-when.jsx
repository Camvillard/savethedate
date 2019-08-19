// external libs
import React from "react";


class FormCarpoolWhen extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p>quand veux-tu (voulez-vous) partir au chalet (la cérémonie aura lieu le samedi, mais les chalets sont prêts dès le vendredi en début d'après-midi) ?</p>
        <div className="custom-select">
          <select name="comeWhenPool" id="presence" onChange={this.props.onChange}>
            <option default-value>préférence de départ</option>
            <option value="vendredi matin">vendredi matin</option>
            <option value="vendredi aprem">vendredi aprem</option>
            <option value="samedi matin">samedi matin</option>
          </select>
        </div>
      </div>
    )
  }
}

export default FormCarpoolWhen;
