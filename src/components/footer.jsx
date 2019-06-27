// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
// import AddToCalendar from "./add-to-calendar";

const Footer = (props) => {
  return(
  <footer>
    <div id="footer-links">
      <Link to="/nous-contacter">contact</Link>
    </div>
  </footer>
  )
}

export default Footer;
