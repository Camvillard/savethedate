// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
import { defineContentLanguage } from '../helpers/helpers';

class Header extends React.Component {

  render() {
    const data = defineContentLanguage(this.props.language).header;
    return(
    <header className={this.props.color === "dark" ? "dark-header" : "light-header"}>
      <Link to="/">
        {/* cam + alex */}
        <div id="cam-alex">
          <h6>cam & alex</h6>
          <div className="small-divider"></div>
        </div>
        {/* cam + alex */}
      </Link>
      <p id="header-tagline">{data.content} <br/>St Adolphe d'Howard </p>
    </header>

    )
  }
}

export default Header;
