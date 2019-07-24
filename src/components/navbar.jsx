import React from "react";
import { Link } from "gatsby";

import Toggle from "../images/toggle.svg";
import CloseToggle from "../images/toggle-close.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarIsOpen: false
    }
  }

  handleClick = (e) => {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    })

  }
  render() {
    return(
      <div id="navbar" className="main-navbar">

        <div id="toggle" onClick={this.handleClick}>

          {this.state.navbarIsOpen ? <CloseToggle /> : <Toggle />  }

        </div>

        <ul className={`menu ${this.state.navbarIsOpen ? 'show-menu' : 'hide-menu' }`}>
          <li><Link to="/informations">les infos</Link></li>
          <li><Link to="/location">l'endroit</Link></li>
        </ul>

      </div>
    )
  }
}
export default Navbar;
