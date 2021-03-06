//libraries
import React from "react"

// imported forms:
import FormReturnWhen from "./form-return-when";
import FormReturnQty from "./form-return-qty";
import FormBtnSubmit from "./form-btn-submit";


class FormHasACarMain extends React.Component {
  render (){
    if (this.props.value.returnWay) {
      return (
        <div className="covoit-form-container">
          <FormReturnWhen onChange={this.props.onChange} />
          {this.props.value.returnWhen !== null && (<FormReturnQty onChange={this.props.onChange} />)}
        </div>
      );
    }
    else {
      return (
        null
      );
    }
  }
}

export default FormHasACarMain;
