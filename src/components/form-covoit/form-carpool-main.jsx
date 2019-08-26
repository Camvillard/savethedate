//libraries
import React from "react";

//imported forms
import FormReturnCarpoolQty from "./form-return-carpool-qty";
import FormReturnCarpoolWhen from "./form-return-carpool-when";
import FormBtnSubmit from "./form-btn-submit";


class FormCarpoolMain extends React.Component {
  render(){
    if (this.props.value.returnWayPool) {
      return(
        <div className="covoit-form-container">
          <FormReturnCarpoolQty onChange={this.props.onChange} value={this.state} />
          {this.props.value.returnPoolQty > 0 && (<FormReturnCarpoolWhen onChange={this.props.onChange} />)}
        </div>
      );
    }
    else {
      return(
        null
      )
    }
  }
}

export default FormCarpoolMain;

