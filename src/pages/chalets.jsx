// external libs
import React from 'react';
import { Link } from 'gatsby';

// internal stuff
import SEO from "../components/seo";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import MapChalets from "../components/map-chalets";

// style & assets
import '../styles/main.scss';

class Chalets extends React.Component {

  render() {
    // const numOfPeople = this.props.location.state.people
    return(
      <React.Fragment>
        <SEO  title="les chalets" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />
        <Header color="dark" position="fixed"/>

        <div className="page-container container-fullpage page-chalets">

        <Navbar
          linksColor="white"
          bgColor="yellow"
          sidebarColor="yellow"
          toggleColor="yellow"
        />

        <div className="top-container">

          <div className="large-container">
            <h2 className="green"><span>les chalets</span></h2>
            <h2 className="page-title green"><span>et leur répartition</span></h2>

            <p>Il y a cinq chalets en tout, répartis environ comme sur cette petite illustration qui n'est absolument pas à l'échelle mais qui donne quand même un peu une indication.</p>
            <p>pour rappel, toutes les infos pour se rendre au chalet <Link to="/location">sont sur cette page-ci.</Link></p>
            <img src="https://res.cloudinary.com/camvillard/image/upload/v1571325516/dixneufoctobre/map_ceremonie_repartition.png" alt=""/>

            <div className="chalet-card" id="grand-lodge">
              <h3 className="chalet-name"><span>le grand lodge</span></h3>
              <p className="chalets-description">le chalet principal, autour (et dans, ne nous leurrons pas) duquel se fera la cérémonie.</p>
              <ul className="chalet-list">
                <li>Alex  & Cam (c’est nous) </li>
                <li>Cé</li>
                <li>Chaton</li>
                <li>Nicolette</li>
                <li>Gaspard & Lucie</li>
                <li>Éli & Don</li>
                <li>Mehdi</li>
                <li>Caro & Maciu</li>
                <li>Thomas & Lisa</li>
                <li>Anna</li>
                <li>Elsa</li>
                <li>Katie</li>
                <li>Claire L.R.</li>
              </ul>
            </div>
            {/* end of chalet card */}

            <div className="chalet-card" id="grand-shack">
              <h3 className="chalet-name"><span>le grand shack</span></h3>
              <p className="chalets-description">se situe à 3 minutes à pied environ.</p>
              <ul className="chalet-list">
                <li>Alex J.</li>
                <li>Axel</li>
                <li>Baptiste &  Mathilde</li>
                <li>Claire &  Arthur</li>
                <li>Clément</li>
                <li>David</li>
                <li>Édouard & Alix</li>
                <li>Flo</li>
                <li>Greg & Alice</li>
                <li>Lauriane</li>
                <li>Louis & Charlotte</li>
                <li>PichPich</li>
                <li>Sarah</li>
                <li>Guigui</li>
              </ul>
            </div>
            {/* end of chalet card */}

            <div className="chalet-card" id="du-lac">
              <h3 className="chalet-name"><span>le chalet du lac</span></h3>
              <p className="chalets-description">se situe à 5 minutes à pied environ.</p>
              <ul className="chalet-list">
                <li>Aline</li>
                <li>Claire S.</li>
                <li>Élo</li>
                <li>Marinette</li>
                <li>Esme & Seb</li>
                <li>Kristyskaïa</li>
                <li>Martin</li>
                <li>MG & family</li>
                <li>Philippe</li>
                <li>Romain</li>
                <li>Simon</li>
                <li>Stef-de-x & Annie</li>
                <li>Damien </li>
                <li>Ben & Alexia</li>
              </ul>
            </div>
            {/* end of chalet card */}

            <div className="chalet-card" id="log-home">
              <h3 className="chalet-name"><span>le log home</span></h3>
              <p className="chalets-description">se situe à 6 minutes à pied environ.</p>
              <ul className="chalet-list">
                <li>Michèle & Benoit</li>
                <li>Caroline & François & Camillou</li>
                <li>Christine & Paul-Louis</li>
                <li>Étienne & Nicole</li>
              </ul>
            </div>
            {/* end of chalet card */}

            <div className="chalet-card" id="hom">
              <h3 className="chalet-name"><span>le hôm</span></h3>
              <p className="chalets-description">se situe à 10 minutes en voiture environ, alors oui, pour celui il faudra un Sam, capitaine de soirée.</p>
              <ul className="chalet-list">
                <li>André & Marcela</li>
                <li>Henri & Françoise</li>
                <li>Isabelle & Olivier</li>
              </ul>
            </div>
            {/* end of chalet card */}


          </div>





        </div>

          <Footer />
          {/* links */}

        </div>
      </React.Fragment>
    )
  }
}

export default Chalets;

