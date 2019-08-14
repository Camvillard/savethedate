import React from "react"
import { Link } from "gatsby"

// imported forms:
import FormReturn from "../components/form-covoit/form-return";
import FormReturnWhen from "../components/form-covoit/form-return-when";
import FormReturnQty from "../components/form-covoit/form-return-qty";


import FormBtnSubmit from "../components/form-covoit/form-btn-submit";




class FormHasACarMain extends React.Component {
  render (){
console.log(this.props.value.returnWay)
  const currentState = this.props.currentState
  if (this.props.value.returnWay){
    return (
      <div className="covoit-form-container">
        <FormReturnWhen onChange={this.props.onChange} />

        {this.props.value.returnWhen !== null && (<FormReturnQty onChange={this.props.onChange} />)}

        {this.props.value.returnHowMany > 0 && (<FormBtnSubmit />)}
      </div>
    )
  } else if (this.props.value.returnWay === null) {
    return (
      null
    )
  } else {
    return (
      <div className="covoit-form-container">
          <FormBtnSubmit />
      </div>
    )
  }
  }
}



export default FormHasACarMain;
