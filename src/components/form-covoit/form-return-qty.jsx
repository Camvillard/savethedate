// external libs
import React from "react";
import { Link } from 'gatsby';


class FormReturnQty extends React.Component {

  render() {
    return(
     <div className="covoit-form hidden-input">
        <p> Et tu auras de la place pour combien de personnes cette fois ci?  </p>
        <input type="text" placeholder="combien de personnes" ref="qty" onChange={this.props.onChange}/>
      </div>
    )

  }
}



export default FormReturnQty;
