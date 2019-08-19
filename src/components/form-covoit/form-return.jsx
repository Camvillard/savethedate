// external libs
import React from "react";

class FormReturn extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p>est-ce que vous pouvez aussi ramener des gens après le weekend (uniquement si vous êtes Sam, capitaine de soirée, et que vous êtes sobres) ?</p>
        <div className="covoit-radio-btn">
          <label className="radio-btn-style"> oui
            <input type="radio" name="returnWay" value="oui" onChange={this.props.onChange} />
            <span className="radio-btn-span"></span>
          </label>
        </div>
        <div className="covoit-radio-btn">
          <label className="radio-btn-style"> non
            <input type="radio" name="returnWay" value="non" onChange={this.props.onChange} />
            <span className="radio-btn-span"></span>
          </label>
        </div>
      </div>
    )
  }
}

export default FormReturn;
