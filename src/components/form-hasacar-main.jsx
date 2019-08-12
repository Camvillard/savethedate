import React from "react"
import { Link } from "gatsby"

// imported forms:
import FormHasACar from "../components/form-covoit/form-has-a-car";
import FormHowMany from "../components/form-covoit/form-how-many";
import FormComeWhen from "../components/form-covoit/form-come-when";
import FormPickupPlace from "../components/form-covoit/form-pickup-place";
import FormReturn from "../components/form-covoit/form-return";
import FormReturnWhen from "../components/form-covoit/form-return-when";
import FormReturnQty from "../components/form-covoit/form-return-qty";


import FormBtnSubmit from "../components/form-covoit/form-btn-submit";




class FormHasACarMain extends React.Component {
  render (){
    return(
    <div className="covoit-form-container">
      <FormHasACar onChange={this.props.onChange} />

        {this.state.hasACar && (<FormHowMany onChange={this.props.onChange} />)}

        {this.state.howMany === ('')}

        {this.state.howMany > 0  && (<FormComeWhen onChange={this.props.onChange} />)}

        {this.state.comeWhen === ('')}

        {this.state.comeWhen !== ('') && (<FormPickupPlace onChange={this.props.onChange} />)}

        {this.state.placePickUp === ('')}

        {this.state.placePickUp !== ('') && (<FormReturn onChange={this.props.onChange} />)}

        {this.state.returnWay === null && ('')}

        {this.state.returnWay && (<FormReturnWhen onChange={this.props.onChange} />)}

        {this.state.returnWay === 'non' && (<FormBtnSubmit />)}

        {this.state.returnWhen !== ('') && (<FormReturnQty onChange={this.props.onChange} />)}

        {this.state.returnHowMany === ('')}

        {this.state.returnHowMany > 0 && (<FormBtnSubmit />)}
    </div>
    )
  }
}



export default FormHasACarMain;
