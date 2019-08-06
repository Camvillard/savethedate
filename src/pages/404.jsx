// external libs
import React from "react"

// internal stuff
import SEO from "../components/seo"

// style & assets
import '../styles/main.scss';
import AnimatedButton from "../components/animated-button";


const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <AnimatedButton link="/" value="réserver et payer l'hébergement" />
    <p>La page demandée n'existe pas, plus, ou bien vous avez une petite faut d'orthographe dans l'url.</p>
  </div>
)

export default NotFoundPage
