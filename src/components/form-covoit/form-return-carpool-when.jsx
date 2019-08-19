// external libs
import React from "react";


class FormReturnCarpoolWhen extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p>quand penses-tu être (plus ou moins) en forme pour partir dimanche ? Au pire tu dormiras dans la voiture :) </p>
        <div className="custom-select">
          <select name="returnPoolWhen" id="presence" onChange={this.props.onChange}>
            <option value="dimanche matin">dimanche matin</option>
            <option value="dimanche aprem">dimanche aprem</option>
          </select>
        </div>
      </div>
    )
  }
}

export default FormReturnCarpoolWhen;
