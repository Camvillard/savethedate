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

          {this.state.navbarIsOpen ? <Toggle className="close" /> : <Toggle className="open" fill="red" /> }

        </div>

        <ul className={`mobile-menu ${this.state.navbarIsOpen ? 'show-menu' : 'hide-menu' } ${this.props.color} `}>
          <li><Link to="/informations">les infos</Link></li>
          <li><Link to="/location">l'endroit</Link></li>
          <li><Link to="/reserver">réserver</Link></li>
          <li><Link to="/nous-contacter">contact</Link></li>
        </ul>

        <div className="desktop-menu">

          <div className="desktop-menu-container">

          <ul className="list-inline">

            <li><Link to="/location" className={`${this.props.sidebarColor}`}>l'endroit</Link></li>
            <li><Link to="/informations" className={`${this.props.sidebarColor}`}>infos</Link></li>
            <li><Link to="/reserver" className={`${this.props.sidebarColor}`}>réserver</Link></li>
            <li><Link to="/nous-contacter" className={`${this.props.sidebarColor}`}>contact</Link></li>

          </ul>


          </div>

        </div>

      </div>
    )
  }
}
export default Navbar;
