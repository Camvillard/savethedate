import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

export default () => (
  <header>
    <div>
        <Link to="/">
        {/* cam + alex */}
        <div id="cam-alex">
          <h6>cam + alex</h6>
          <p>prout</p>
          <div className="small-divider"></div>
          <p>plus d'infos à venir,<br/>genre bientôt.</p>
        </div>
        {/* cam + alex */}
        </Link>
    </div>
  </header>
)

