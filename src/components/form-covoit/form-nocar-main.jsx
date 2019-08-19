//libraries
import React from "react"

// imported forms:
import FormCarpoolQty from "./form-carpool-qty";
import FormCarpoolWhen from "./form-carpool-when";
import FormReturnCovoit from "./form-return-covoit";
import FormCarpoolMain from "./form-carpool-main";
import FormBusLien from "./form-bus-lien";

class FormNoCarMain extends React.Component {
  render(){
    if (this.props.value.carPool) {
      return(
        <div className="covoit-form-container">
          <FormCarpoolQty onChange={this.props.onChange} />
          {this.props.value.howManyPool > 0  && (<FormCarpoolWhen onChange={this.props.onChange} />)}
          {this.props.value.comeWhenPool !== null && (<FormReturnCovoit onChange={this.props.onChange} />)}
          <FormCarpoolMain onChange={this.props.onChange} value={this.props.value} />
        </div>
      );
    }

    if (this.props.value.carPool === null) {
      return(
        null
      );
    }

    else {
      return(
        <div className="covoit-form-container">
          <FormBusLien />
        </div>
      );
    }
  }
}

export default FormNoCarMain;
