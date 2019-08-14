import React from "react"
import { Link } from "gatsby"

// imported forms:

import FormCarPool from "../components/form-covoit/form-car-pool";
import FormCarpoolQty from "../components/form-covoit/form-carpool-qty";
import FormCarpoolWhen from "../components/form-covoit/form-carpool-when";
import FormReturnCovoit from "../components/form-covoit/form-return-covoit";
import FormCarpoolMain from "../components/form-carpool-main";


import FormBtnSubmit from "../components/form-covoit/form-btn-submit";
import FormBusLien from "../components/form-covoit/form-bus-lien";


class FormNoCarMain extends React.Component {
  render(){
    console.log('test 1', this.props.value.carPool)
    if (this.props.value.carPool){
      return (
        <div className="covoit-form-container">
          <FormCarpoolQty onChange={this.props.onChange} />

          {this.props.value.howManyPool > 0  && (<FormCarpoolWhen onChange={this.props.onChange} />)}

          {this.props.value.comeWhenPool !== null && (<FormReturnCovoit onChange={this.props.onChange} />)}

          <FormCarpoolMain onChange={this.props.onChange} value={this.props.value} />
        </div>
      )
    } else if (this.props.value.carPool === null) {
        return(
          null
        )
    } else {
        return(
          <div className="covoit-form-container">
            <FormBusLien />
          </div>
        )
      }
  }
}



export default FormNoCarMain;
