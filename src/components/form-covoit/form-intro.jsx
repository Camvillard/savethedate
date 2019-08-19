 // external libs
import React from "react";

// internal stuff
import Header from "../header";
import SEO from '../seo';


class FormIntro extends React.Component {

  render() {
    return(
      <React.Fragment>
          <SEO
            title="RSVP"
            keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]}
          />
          <Header
            color="light"
            position="regular"
            navbarColor="yellow"
          />
          <div className="main-container small">
            <h2 className="page-title white"><span>covoiturage</span></h2>
            <p className="page-content white">comme le bilan carbone de ce mariage est déjà relativement catastrophique, nous aimerions éviter d'avoir 72 voitures différentes, que nous ne pourrons en plus pas vraiment toutes garer sur place. Voici donc un petit formulaire pour nous permettre de mettre en place un covoiturage du feu de Dieu, permettant ainsi des trajets optimisés pendant lesquels vous pourrez faire connaissance, faire des blind test, ou jouer à des jeux de voiture rigolos.</p>
              <form className="form-stroked form-white">
                <input type="text" placeholder="nom, prénom, etc" name="name" onChange={this.props.onChange} value={this.props.value.name} />
              </form>
          </div>
      </React.Fragment>
    )
  }

}

export default FormIntro;
