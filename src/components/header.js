// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
import Navbar from "./navbar"

class Header extends React.Component {

  render() {
    return(
    <header className={`${this.props.color}-header`} >

      <div className="header-left">
        <Link to="/">
          <h6>cam & alex</h6>
        </Link>
        <p>19/10/2019</p>
      </div>

    </header>

    )
  }
}

export default Header;
