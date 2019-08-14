import React from "react";
import { Link } from "gatsby";


import FormCarPool from "../components/form-covoit/form-car-pool";
import FormCarpoolQty from "../components/form-covoit/form-carpool-qty";
import FormCarpoolWhen from "../components/form-covoit/form-carpool-when";
import FormReturnCovoit from "../components/form-covoit/form-return-covoit";
import FormReturnCarpoolQty from "../components/form-covoit/form-return-carpool-qty";
import FormReturnCarpoolWhen from "../components/form-covoit/form-return-carpool-when";
import FormNoCarMain from "../components/form-nocar-main";

import FormBtnSubmit from "../components/form-covoit/form-btn-submit";
import FormBusLien from "../components/form-covoit/form-bus-lien";

class FormCarpoolMain extends React.Component {
  render(){
    console.log('test 2', this.props.value.returnWayPool)
    if (this.props.value.returnWayPool){
      return(
        <div className="covoit-form-container">
          <FormReturnCarpoolQty onChange={this.props.onChange} value={this.state} />

          {this.props.value.returnPoolQty > 0 && (<FormReturnCarpoolWhen onChange={this.props.onChange} />)}

          {this.props.value.returnPoolWhen !== null && (<FormBtnSubmit />)}
        </div>
      )
    } else if (this.props.value.returnWayPool === null) {
      return(
        null
      )
    } else {
      return(
        <div className="covoit-form-container">
          <FormBtnSubmit />
        </div>
      )
    }
  }
}


export default FormCarpoolMain;

