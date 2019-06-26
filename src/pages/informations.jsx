// external libs
import React from 'react';
import { Link } from 'gatsby';

// internal stuff
import { defineContentLanguage } from '../helpers/helpers';
import Header from "../components/header";
import Footer from '../components/footer';

// style & assets
import BlobOne from "../images/infos-blob-1.svg";
import BlobTwo from "../images/infos-blob-2.svg";
import BlobThree from "../images/infos-blob-3.svg";
import BlobFour from "../images/infos-blob-4.svg";
import Arrow from "../images/arrow.svg";

import "../styles/main.scss"


class InformationsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: navigator.language
    }
  };

  render(){
    const data = defineContentLanguage(this.state.language).informations;
    return(
      <div id="infos-page">
        <Header language={this.state.language} color="dark"/>

        <div className="fullwidth-container">

          <div className="infos-container" >

            <div className="blob" id="infos-blob-one">
              <BlobOne />
              <h2>1</h2>
              <h4 className="infos-title"><span>le week end</span></h4>
            </div>

            <div className="main-container" >
              <div className="infos-content" id="organisation">
                <p>le week end du mariage aura lieu du dix-huit (18) octobre en soirée au vingt (20) octobre en fin de journée, à Saint Adolphe d’Howard, une charmante petite bourgade des Laurentides, à 1h30 environ de Montréal.</p>
                <p>vous pouvez arriver à l’heure qui vous sied le plus sur les lieux, la cérémonie en tant que telle sera célébrée à 16h, le samedi, dans le chalet principal, le Grand Lodge.</p>
                <p>le vendredi soir et le samedi matin seront un peu « chacun fait comme il veut », il y a des barbecues sur place, ainsi que tous les trucs normaux utiles en temps normal pour cuisiner. le dimanche matin, afin de se remettre des émotions - et des gin tonics - il y aura un fantastique brunch aux alentours de midi, toujours au Grand Lodge.</p>
                <div className="links-decorated">
                  <Link className="link-block text-strong" to="/location">
                    <Arrow className="link-decoration"/>
                    découvrir les lieux
                  </Link>
                </div>
              </div>
            </div>

          </div>
          {/* end of #blob-one */}

          <div className="infos-container" >

            <div className="blob" id="infos-blob-two">
              <BlobTwo />
              <h2>2</h2>
              <h4 className="infos-title"><span>l'hébergement</span></h4>
            </div>

            <div className="main-container" >
              <div className="infos-content" id="sleeping">
                <p>5 chalets sont réservés pour le weekend entier (il y a des pédalos et des plages privées sur le lac et des baby-foot et des barbecues dans chacun des chalets) (oui, c'est merveilleux).</p>
                <p>on demande à chacun une petite participation de 75$ CAD par personne (environ 50 euros) pour le weekend, pour l'hébergement.
                </p>
                <p>un petit peu comme en colonie de vacances, nous essaierons de mettre des amis ensemble, mais bon, peut-être que vous allez vous retrouver avec des gens que vous ne connaissez pas, mais écoutez, quelle meilleure occasion qu’un mariage pour rencontrer d’autres personnes, après tout ?
                </p>
                <div className="links-decorated">
                  <Link to="/reserver" className="text-strong link-block">
                    <Arrow className="link-decoration"/>
                    nous faire signe pour un hébergement
                  </Link>
                </div>
              </div>
            </div>

          </div>
          {/* end of #blob-two */}

          <div className="infos-container" >

            <div className="blob" id="infos-blob-three">
              <BlobThree />
              <h2>3</h2>
              <h4 className="infos-title"><span>le dress-code</span></h4>
            </div>

            <div className="main-container" >
              <div className="infos-content" id="dresscode">
                <p>un peu comme chez mac do*, venez comme vous êtes. si vous voulez porter un chapeau, vous pouvez porter un chapeau, si vous voulez porter des baskets, vous pouvez porter des baskets, si vous voulez porer un costume trois  pièces, vous pouvez porter un costumes trois pièces, écoutez, même si vous voulez venir en tongsm venez en tongs.</p>
                <p>gardez tout de même en tête que le mois d'octobre au Québec peut être fantastique, mais peut également être une catastrophe météorologique, alors bon, on vous conseille de prévoir une petite laine, comme on dit.</p>
                <p>(* mais ce sera meilleur que chez mac do)</p>
              </div>
            </div>

          </div>
          {/* end of #blob-three */}

          <div className="infos-container" >

            <div className="blob" id="infos-blob-four">
              <BlobFour />
              <h2>4</h2>
              <h4 className="infos-title"><span>les cadeaux (lol)</span></h4>
            </div>

            <div className="main-container" >
              <div className="infos-content" id="gifts">
                <p>c'est vraiment parce que 98% des gens ont posé la question, alors d'accord, si vous voulez nous offrir des cadeaux, nous n'y voyons aucun inconvénient.</p>
                <p>comme nous sommes un couple moderne, nous avons fait une petite cagnotte en ligne qui nous aidera à financer notre voyage de noces au Chili (ou des croquettes pour Underscore)</p>
                <div className="links-decorated">
                  <a className="link-block text-strong" href="https://paypal.me/pools/c/8fXMV0Bbt7" target="_blank" rel="noopener noreferrer">
                    <Arrow className="link-decoration"/>
                    participer à la cagnotte
                  </a>
                </div>

              </div>
            </div>

          </div>
          {/* end of #blob-four */}

        </div>
        {/* end of .blobs */}


        <Footer language={this.state.language} />


      </div>
    )
  }
}

export default InformationsPage;
