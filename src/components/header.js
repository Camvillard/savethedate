import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

class Header extends React.Component {

  displayInfos = (language) => {
    const french = ['fr-FR', 'fr']
    let infos
    french.includes(language) ? infos = "plus d'infos à venir, genre plutôt bientôt" : infos = "more infos asap"
    return infos
  }

  render() {
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
      {this.props.tagline}
      </p>
    </header>

    )
  }
}

export default Header;
