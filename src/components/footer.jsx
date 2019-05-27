// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
import AddToCalendar from "./add-to-calendar";
import { defineContentLanguage } from '../helpers/helpers';

const Footer = (props) => {
  const data = defineContentLanguage(props.language).footer;
  return(
  <footer>
    <div className="footer-links">
      <AddToCalendar />
      <span> // </span>
      <Link to="/nous-contacter">contact</Link>
    </div>
  </footer>
  )
}

export default Footer;
