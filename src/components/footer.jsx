// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
// import AddToCalendar from "./add-to-calendar";

const Footer = (props) => {
  return(
  <footer>
    <div id="footer-links">
      <Link to="/nous-contacter" className="accent-text">contact </Link>
      -
      <Link to="/reserver" className="accent-text"> réserver</Link>
    </div>
  </footer>
  )
}

export default Footer;
