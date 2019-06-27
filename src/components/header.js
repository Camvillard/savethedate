// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff

class Header extends React.Component {

  render() {
    return(
    <header className={`${this.props.color}-header ${this.props.position}-header`} >
      <Link to="/">
        {/* cam + alex */}
        <div id="cam-alex">
          <h6>cam & alex</h6>
          <div className="small-divider"></div>
        </div>
        {/* cam + alex */}
      </Link>
      <p id="header-tagline">10/10/2019 <br/>St Adolphe d'Howard </p>
    </header>

    )
  }
}

export default Header;
