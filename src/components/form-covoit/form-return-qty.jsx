// external libs
import React from "react";


class FormReturnQty extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p>combien de places auras-tu à offrir pour le retour ?</p>
        <input name="returnHowMany" type="text" placeholder="douze, 1, 3..." onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default FormReturnQty;
