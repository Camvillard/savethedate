// external libs
import React from "react";


class FormReturnCarpoolQty extends React.Component {
  render() {
    return(
     <div className="covoit-form hidden-input">
        <p>de combien de places auras-tu besoin pour dimanche?</p>
        <input name="returnPoolQty" type="text" placeholder="dix-huit, 2, 1..." onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default FormReturnCarpoolQty;
