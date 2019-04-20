import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

class Header extends React.Component {

  handleClick = () => {
    const flags = this.props.flags;
    console.log(flags)
  }

  render() {
    return(
    <header>
      <Link to="/">
        {/* cam + alex */}
        <div id="cam-alex">
          <h6>cam + alex</h6>
          <div className="small-divider"></div>
        </div>
        {/* cam + alex */}
      </Link>
      <p id="header-tagline">
        plus d'infos à venir,<br/>
        genre bientôt.
      </p>
      <div onClick={this.handleClick} id="change-lang">langue</div>
    </header>

    )
  }
}

export default Header;
