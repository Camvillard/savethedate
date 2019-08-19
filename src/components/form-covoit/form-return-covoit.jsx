// external libs
import React from "react";


class FormReturnCovoit extends React.Component {
  render() {
    return(
      <div className="covoit-form hidden-input">
        <p>enfin, est-ce que tu auras besoin de covoiturage pour la route de retour ?</p>
        <div className="covoit-radio-btn">
          <label className="radio-btn-style">oui
            <input type="radio" name="returnWayPool" value="oui" onChange={this.props.onChange}/>
            <span className="radio-btn-span"></span>
          </label>
        </div>

        <div className="covoit-radio-btn">
          <label className="radio-btn-style">non
            <input type="radio" name="returnWayPool" value="non" onChange={this.props.onChange}/>
            <span className="radio-btn-span"></span>
          </label>
        </div>
      </div>
    )
  }
}

export default FormReturnCovoit;
