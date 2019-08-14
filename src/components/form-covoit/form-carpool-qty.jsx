// external libs
import React from "react";
import { Link } from 'gatsby';


class FormCarpoolQty extends React.Component {

  render() {
    return(
     <div className="covoit-form hidden-input">
        <p> Combien de places tu désires?   </p>
        <input name="howManyPool" type="text" placeholder="combien de personnes" ref="howManyPool" onChange={this.props.onChange}/>
      </div>
    )

  }
}



export default FormCarpoolQty;
