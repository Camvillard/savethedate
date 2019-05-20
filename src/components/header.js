import { Link } from "gatsby"
import React from "react"

import { defineContentLanguage } from '../helpers/helpers';

class Header extends React.Component {

  render() {
    const data = defineContentLanguage(this.props.language).savethedate;
    console.log(data)

    return(
    <header className={ this.props.color === "dark" ? "dark-header" : "light-header"}>
      <Link to="/">
        {/* cam + alex */}
        <div id="cam-alex">
          <h6>cam + alex</h6>
          <div className="small-divider"></div>
        </div>
        {/* cam + alex */}
      </Link>
      <p id="header-tagline">
      {this.props.tagline === "text" ? data.headerTagline : "19/10/2019"}
      </p>
    </header>

    )
  }
}

export default Header;
