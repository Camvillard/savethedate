// external libs
import React from "react";
import { Link } from 'gatsby';


class FormReturnCovoit extends React.Component {

  render() {
    return(
      <div className="covoit-form hidden-input">
        <p>Notre dernière question, est-ce que tu auras besoin de la covoiturage pour la route de retour?</p>

        <div className="covoit-radio-btn">
          <label className="radio-btn-style"> oui
            <input type="radio" ref="returnWayPool"name="returnWayPool" value="oui" onChange={this.props.onChange}/>
            <span className="radio-btn-span"></span>
          </label>
        </div>

        <div className="covoit-radio-btn">
          <label className="radio-btn-style"> non
            <input type="radio" ref="returnWayPool" name="returnWayPool" value="non" onChange={this.props.onChange}/>
            <span className="radio-btn-span"></span>
          </label>
        </div>
      </div>


    )

  }
}



export default FormReturnCovoit;
