// external libs
import React from "react";



class InputCarpoolingOne extends React.Component {

  render() {
    return(
      <div>
        <select className="hidden-input input-test" name="car-pooling" id="car-pooling" onChange={this.props.onChange}>
          <option value="yes">car pooling yes</option>
          <option value="no">car pooling no</option>
        </select>
      </div>
    )

  }
}


export default InputCarpoolingOne;
