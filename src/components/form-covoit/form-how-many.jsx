// external libs
import React from "react";
import { Link } from 'gatsby';


class FormHowMany extends React.Component {

  render() {
    return(
     <div className="covoit-form hidden-input">
        <p> Combien de personnes tu peux prendre dans ta voiture? </p>
        <input type="text" placeholder="combien de personnes" ref="qty" onChange={this.props.onChange}/>
      </div>
    )

  }
}



export default FormHowMany;
