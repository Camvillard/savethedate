// external ressources
import React from "react"

// internal data
import SEO from "../components/seo"

// styles
import "../styles/main.scss";


export default () => {
  return(
    <div id="contact-container">
      <SEO title="Nous contacter" id="contact" />
      <h1>contact</h1>
      <div className="contact-content">
        <p className="text-normal">si vous avez des trucs à nous demander et que vous avez bien compris que
        bon, le téléphone, c'est interdit, vous pouvez utiliser ce formulaire de contact.
        étant donné qu'on est supposément débordés par la préparation de ce mariage,
        ne vous inquiétez pas si nous mettons plus de 48 heures à vous répondre,
        et relancez-nous si vraiment on vous a oublié au bout d'une semaine.</p>
      </div>
      <form name="contactform" method="POST" data-netlify="true" action="/success">
        <input type="hidden" name="contactform" value="contact" />
        <input name="name" type="text" placeholder="name"/>
        <input name="name" type="email" placeholder="adresse mail"/>
        <input name="objet" type="text" placeholder="sujet"/>
        <input name="message" type="textarea" placeholder="message"/>
        <button className="button-send">envoyer le message</button>
      </form>

      <div className="back-home-link">
        <a href="/">retour au site</a>
      </div>

    </div>
  )
}
