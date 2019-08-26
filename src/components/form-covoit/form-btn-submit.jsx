// external libs
import React from "react";

class FormBtnSubmit extends React.Component {
  render() {
    return(
        <button disabled={this.props.disabled} className="button-send">envoyer</button>
    )
  }
}

export default FormBtnSubmit;
