// external libs
import React from "react";

class FormBtnSubmit extends React.Component {
  render() {
    return(
      <div>
        <button className={`button-send ${this.props.disabled ? 'is-disabled' : 'is-enabled'}`}>envoyer</button>
      </div>
    )
  }
}

export default FormBtnSubmit;
