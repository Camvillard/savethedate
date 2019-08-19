// external libs
import React from "react";

class FormCarpoolQty extends React.Component {
  render() {
    return(
     <div className="covoit-form hidden-input">
        <p> Combien de places tu désires? </p>
        <input name="howManyPool" type="text" placeholder="combien de personnes" onChange={this.props.onChange} />
      </div>
    )
  }
}

export default FormCarpoolQty;
