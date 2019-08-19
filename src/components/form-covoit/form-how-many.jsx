// external libs
import React from "react";


class FormHowMany extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p> Combien de personnes tu peux prendre dans ta voiture? </p>
        <input name="howMany" type="text" placeholder="combien de personnes" onChange={this.props.onChange} />
      </div>
    )
  }
}

export default FormHowMany;
