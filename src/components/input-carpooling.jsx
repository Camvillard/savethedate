// external libs
import React from "react";
import { Link } from 'gatsby';


const SimpleInput = ({data}) => {
  // console.log(data)
  return(
    <div className="form-element">
      <label htmlFor="">{data.label}</label>
      <input type="text" name={data.name} onChange={data.onChange}/>
    </div>
  )
}

const SelectInput = ({data}) => {
  // console.log(data)
  return(
    <div className="form-element">
      <label htmlFor="">{data.label}</label>
      <select name="test" id="select-test" onChange={data.onChange}>
        {data.optionsForSelect.split(',').map( d => <option value={d} key={d}>{d}</option>)}
      </select>
    </div>
  )
}

const RadioInput = ({data}) => {
  // console.log(data)
  const values = data.optionsForSelect.split(',')
  console.log(values)
  return(
    <div className="form-element">
      <label htmlFor="">{data.label}</label>
      {values.map( v => {
        return (
          <div>
            <label htmlFor="">{v}</label>
            <input type="radio" value={v}/>
          </div>
        )
      })}
    </div>
  )
}

class InputCarpooling extends React.Component {

  render() {
    return(
      <div>
        {this.props.formElement === "input" && (<SimpleInput data={this.props} />)}
        {this.props.formElement === "select" && (<SelectInput data={this.props} />)}
        {this.props.formElement === "radio" && (<RadioInput data={this.props} />)}
      </div>
    )

  }
}



export default InputCarpooling;
