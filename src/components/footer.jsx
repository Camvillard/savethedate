// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
import { defineContentLanguage } from '../helpers/helpers';

const Footer = (props) => {
  const data = defineContentLanguage(props.language).footer;
  return(
  <footer>
    <div className="footer-links">
      <a
      rel="noopener noreferrer"
      target="_blank"
      href="#">
      {data.calendar}
      </a>
      <span> // </span>
      <Link to="/nous-contacter">contact</Link>
    </div>
  </footer>
  )
}

export default Footer;
