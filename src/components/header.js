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
          {/* cam + alex */}
          <div id="cam-alex">
            <h6>cam & alex</h6>
            <div className="small-divider"></div>
          </div>
          {/* cam + alex */}
        </Link>
        <p id="header-tagline">19/10/2019</p>
      </div>
      <Navbar />
    </header>

    )
  }
}

export default Header;
