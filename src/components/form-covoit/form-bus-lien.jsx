// external libs
import React from "react";
import { Link } from 'gatsby';

class FormBusLien extends React.Component {
  render() {
    return(
     <div className="covoit-form hidden-input">
        <p> Dans ce cas la, desolé mais tu prends le bus:</p>
        <a href="https://www.greyhound.ca">
        Click ici pour visiter le site de Greyhound...
        </a>
      </div>
    )

  }
}

export default FormBusLien;
