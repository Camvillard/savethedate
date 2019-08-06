import React from "react";
import { Link } from "gatsby";

import Toggle from "../images/toggle_2.svg";
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
      <div id="navbar" className="main-navbar" >

        <div id="toggle" onClick={this.handleClick} className={`${this.props.toggleColor}`} >

          {this.state.navbarIsOpen ? <Toggle className="close" /> : <Toggle className="open" /> }

        </div>

        <ul className={`mobile-menu ${this.state.navbarIsOpen ? 'show-menu' : 'hide-menu' } ${this.props.bgColor}`}>
          <li><Link to="/informations" className={`${this.props.linksColor}`}>les infos</Link></li>
          <li><Link to="/location" className={`${this.props.linksColor}`}>l'endroit</Link></li>
          <li><Link to="/reserver" className={`${this.props.linksColor}`}>réserver</Link></li>
          <li><Link to="/nous-contacter" className={`${this.props.linksColor}`}>contact</Link></li>
          <li><Link to="/covoiturage" className={`${this.props.linksColor}`}>covoiturage</Link></li>
        </ul>

        <div className="desktop-menu">

          <div className="desktop-menu-container">

          <ul className={`list-inline ${this.props.sidebarColor}`}>

            <li><Link to="/location">l'endroit</Link></li>
            <li><Link to="/informations">infos</Link></li>
            <li><Link to="/reserver">réserver</Link></li>
            <li><Link to="/nous-contacter">contact</Link></li>

          </ul>


          </div>

        </div>

      </div>
    )
  }
}
export default Navbar;
