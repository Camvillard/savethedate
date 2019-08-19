// external libs
import React from "react";


class FormHowMany extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p> combien de personnes pourrais-tu prendre dans ta voiture? </p>
        <input name="howMany" type="text" placeholder="1, 2, dix-huit..." onChange={this.props.onChange} />
      </div>
    )
  }
}

export default FormHowMany;
