// external libs
import React from "react";


class FormComeWhen extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p>quand pourrais-tu récupérer tes co-voitureurs ? </p>
        <div className="custom-select">
          <select name="comeWhen" id="presence" onChange={this.props.onChange}>
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

export default FormComeWhen;
