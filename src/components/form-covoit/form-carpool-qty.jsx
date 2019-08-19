// external libs
import React from "react";

class FormCarpoolQty extends React.Component {
  render() {
    return(
     <div className="covoit-form hidden-input">
        <p>de combien de places as-tu besoin ?</p>
        <input name="howManyPool" type="text" placeholder="1, 2, douze..." onChange={this.props.onChange} />
      </div>
    )
  }
}

export default FormCarpoolQty;
