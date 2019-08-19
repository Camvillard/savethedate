// external libs
import React from "react";


class FormReturnWhen extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p>quand penses-tu être en forme pour partir dimanche ? :)</p>
        <div className="custom-select">
          <select name="returnWhen" id="presence" onChange={this.props.onChange}>
            <option value="dimanche matin">dimanche matin</option>
            <option value="dimanche aprem">dimanche aprèm</option>
          </select>
        </div>
      </div>
    )
  }
}

export default FormReturnWhen;
