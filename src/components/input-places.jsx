// external libs
import React from "react";



class InputPlaces extends React.Component {

  render() {
    return(
      <div>
        <select className="hidden-input" name="car" id="car" onChange={this.props.onChange}>
          <option value="yes">asdfghj</option>
          <option value="no">sdfgh</option>
        </select>
      </div>
    )

  }
}


export default InputPlaces;
