// external libs
import React from "react";
import { Link } from 'gatsby';


class InputCar extends React.Component {

  render() {
    return(
      <div>
        <select name="car" id="car" onChange={this.props.onChange}>
          <option defaultValue>blabla</option>
          <option value="yes">oui</option>
          <option value="no">non</option>
        </select>
      </div>
    )

  }
}



export default InputCar;
