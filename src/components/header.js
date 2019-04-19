import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

export default () => (
  <header>
    <Link to="/">
      {/* cam + alex */}
      <div id="cam-alex">
        <h6>cam + alex</h6>
        <div className="small-divider"></div>
      </div>
      {/* cam + alex */}
    </Link>
    <p id="header-tagline">plus d'infos à venir,<br/>genre bientôt.</p>
  </header>
)

