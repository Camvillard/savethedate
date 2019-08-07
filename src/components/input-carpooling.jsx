// external libs
import React from "react";


const SimpleInput = ({data}) => {
  // console.log(data)
  return(
    <div className="form-element" id={data.id}>
      <label htmlFor="">{data.label}</label>
      <input type={data.inputType} name={data.name} onBlur={data.onBlur} stepbefore={data.stepbefore} step={data.step}/>
    </div>
  )
}

const SelectInput = ({data}) => {
  return(
    <div className="form-element" id={data.id}>
      <label htmlFor="">{data.label}</label>
      <select name={data.name} id={data.id} onChange={data.onChange} stepbefore={data.stepbefore} step={data.step}>
        {data.optionsForSelect.split(',').map( d => <option value={d} key={d}>{d}</option>)}
      </select>
    </div>
  )
}

const RadioInput = ({data}) => {
  // console.log(data)
  const values = data.optionsForSelect.split(',')
  let counter = 0
  return(
    <div className="form-element" id={data.id}>
      <label htmlFor="">{data.label}</label>
      {values.map( v => {
        counter ++
        return (
          <div key={counter}>
            <label htmlFor="">{v}</label>
            <input type="radio" value={v} onChange={data.onChange} name={data.name} stepbefore={data.stepbefore} step={data.step}/>
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
