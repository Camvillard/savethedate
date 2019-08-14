 // external libs
import React from "react";
import { Link } from 'gatsby';

class FormHasACar extends React.Component {
  render() {
    return(
      <div className="covoit-form">
        <p> As-tu une voiture à disposition? </p>
        <div className= "covoit-radio-btn" >
          <label className="radio-btn-style"> oui
            <input type="radio" ref="hasACar" name="hasACar" value="oui" onChange={this.props.onChange} />
            <span className="radio-btn-span"></span>
          </label>
        </div>
        <div className="covoit-radio-btn">
          <label className="radio-btn-style"> non
            <input type="radio" ref="hasACar" name="hasACar" value="non" onChange={this.props.onChange} />
            <span className="radio-btn-span"></span>
          </label>
        </div>
      </div>
    )
  }
}

export default FormHasACar;

