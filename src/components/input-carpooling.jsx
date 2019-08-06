// external libs
import React from "react";
import { Link } from 'gatsby';


const SimpleInput = ({data}) => {
  console.log(data)
  return(
    <div className="form-element">
      <label htmlFor="">{data.label}</label>
      <input type="text" name={data.name} onChange={data.onChange}/>
    </div>
  )
}

const SelectInput = ({data}) => {
  console.log(data)
  return(
    <div className="form-element">
      <label htmlFor="">{data.label}</label>
      <select name="test" id="select-test">
        {data.optionsForSelect.split(',').map( d => <option value={d} key={d}>{d}</option>)}
      </select>
    </div>
  )
}

class InputCarpooling extends React.Component {

  render() {
    return(
      <div>
        {this.props.formElement === "input" ? <SimpleInput data={this.props} /> : <SelectInput data={this.props} />}
      </div>
    )

  }
}



export default InputCarpooling;
