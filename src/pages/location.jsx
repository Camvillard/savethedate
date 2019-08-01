// external libs
import React from 'react';
import { Link } from "gatsby";

// internal stuff
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// style & assets
import "../styles/main.scss"
import Arrow from "../images/arrow.svg";
import MapCeremonie from "../images/map-ceremonie_details.svg"
import MapGenerale from "../images/map_generale.svg"

class Location extends React.Component {


  render(){
    return(
      <div id="location-page">
        <Header color="dark" navbarColor="green"/>

        <div className="top-container">

          <div className="large-container">
            <h2 className="page-title green"><span>se rendre sur place</span></h2>
          </div>

          <img src="https://res.cloudinary.com/camvillard/image/upload/v1561596647/dixneufoctobre/map_generale.png" alt=""/>

          <div className="large-container">

            <div className="location-details">
              <p>la cérémonie (enfin, le weekend
              tout entier) se déroulera au <span className="text-strong">1438, chemin de Jamboree</span>, à Saint Adolphe
              d’howard, charmant petit village québécois tout près des pistes de ski
              que nous n’utiliserons pas parce qu’a priori, il ne neigera pas
              encore, mais enfin, on ne sait pas vraiment.</p>
              <p>pour arriver là
              bas en voiture, c’est plutôt fastoche, depuis Montréal, vous trouvez
              un moyen de rejoindre l’autoroute 15, et après c’est tout schuss
              jusqu’à ce que votre GPS vous dise de tourner à droite.</p>
              <p>si vous
              cherchez un coivoiturage ou avez des places dans une voiture, vous
              seriez des anges de nous faire signe, nous essaierons de mettre en
              contact tout le monde pour que tout se passe comme sur des
              roulettes.</p>

              <div className="links-decorated">
                <Link className="link-block text-strong" to="/location">
                  <Arrow className="link-decoration"/>
                  nous faire signe pour un covoit
                </Link>
              </div>

              <p>évidemment, comme faire venir 52 personnes de
              l’autre côté de l’Atlantique fait de ce mariage une catastrophe
              écologique, si vous voulez venir en train ou en bus, c’est tout à fait
              possible puisque la gare de Saint Sauveur est tout tout proche. Alex
              se fera un plaisir de venir vous chercher, parce qu’il évitera les
              corvées de déco de dernière minute (et aussi parce qu’il est très
              serviable quand il s’agit de prendre une voiture pour aller chercher
              des gens).</p>

              <div className="links-decorated">

              <a href="https://www.rome2rio.com/fr/map/Saint-Sauveur-QC-Canada/Montr%C3%A9al" className="link-block text-strong">
                <Arrow className="link-decoration"/>
                voir les horaires de bus
              </a>
              </div>

          </div>
          {/* end of .location-details */}

            <div className="ceremony-details">
              <div className="large-container">
              <h2 className="page-title green"><span>le lieu du mariage</span></h2>
              </div>
              <img src="https://res.cloudinary.com/camvillard/image/upload/v1563569282/dixneufoctobre/map_ceremonie_details.png" alt="map cérémonie"/>

              <div className="details-content">
                <p>
                  Les 5 chalets sont situés tous à peu près au même endroit, nous vous
                  indiquerons où poser vos pantoufles lorsque vous arriverez, parce que pour le moment, on ne sait pas vraiment.
                </p>
                <p>
                  Chaque chalet dispose d’une petite plage privée (OH LA LA) sur le lac (OH LA LA) avec des pédalos, des kayaks et des SUP (OH LA LA).
                  Chaque chalet aussi possède des petits endroits pour faire du feu (YOUPI) et il y a des billards et un baby foot (YOUPI AUSSI).
                </p>
                <p>Vous n'aurez besoin de rien apporter, si ce n'est votre démaquillant et vos chaussettes de rechange. Toute la literie + serviettes et autre linge blanc est prévue sur place, les chalets étant fully-equiped.</p>
                <div className="links-decorated">
                  <Link className="link-block text-strong" to="/reserver">
                    <Arrow className="link-decoration"/>
                    réserver & payer l'hébergement
                  </Link>
                </div>

              </div>
            </div>
          {/* end of .ceremony-details */}

          </div>
          {/* end of .main-container */}

        </div>

        <Footer />

      </div>
    )
  }
}

export default Location;
