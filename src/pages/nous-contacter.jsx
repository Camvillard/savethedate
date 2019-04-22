// external ressources
import React from "react";
import { Link } from 'gatsby';

// internal data
import SEO from "../components/seo";
import Header from '../components/header';

// styles
import "../styles/main.scss";

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      flags: []
    }
  }

  componentDidMount() {
    // set the language accordingly with the browsers language
    this.setLanguageVersion(window.navigator.language);
  }

  //changes languages depending on the browser preferences
  setLanguageVersion = (language) => {
      this.setState({
        language: language,
        flags: navigator.languages
      })
  };

  render() {
    return(
      <div id="contact-container">
        <SEO title="Nous contacter" id="contact" />

        <Header
          language={this.state.language}
          flags={this.state.flags}
          color="light"
          tagline="19/10/2019"
        />

        <div className="contact-content">
          <p className="text-normal">si vous avez des trucs à nous demander et que vous avez bien compris que
          bon, le téléphone, c'est interdit, vous pouvez utiliser ce formulaire de contact.
          étant donné qu'on est supposément débordés par la préparation de ce mariage,
          ne vous inquiétez pas si nous mettons plus de 48 heures à vous répondre,
          et relancez-nous si vraiment on vous a oublié au bout d'une semaine.</p>
        </div>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          id="contact-form"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" type="text" placeholder="name"/>
          <input name="name" type="email" placeholder="adresse mail"/>
          <input name="objet" type="text" placeholder="sujet"/>
          <input name="message" type="textarea" placeholder="message"/>
          <button className="button-send">envoyer le message</button>
        </form>

        <div id="footer-title">
          <h3>contact</h3>
          <Link to="/">retour à l'accueil</Link>
        </div>

      </div>
    )
  }

}


export default ContactPage;


