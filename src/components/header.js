// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
import Navbar from "./navbar"

class Header extends React.Component {

  render() {
    return(
    <header className={`${this.props.color}-header`} >

      <Navbar color={this.props.navbarColor} sidebarColor={this.props.sidebarColor}/>

    </header>

    )
  }
}

export default Header;
