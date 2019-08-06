// external libs
import React from 'react';
import { Link } from 'gatsby';

// internal stuff
import Header from "../components/header";
import Footer from '../components/footer';


// style & assets
import BlobOne from "../images/blob_homepage-2.svg";
import BlobTwo from "../images/blob_homepage-1.svg";
import Arrow from "../images/arrow.svg";

import AnimatedButton from "../components/animated-button"

import "../styles/main.scss"


class InformationsPage extends React.Component {


  render(){
    return(
      <div id="infos-page">

        <Header color="dark" position="fixed"/>

          <div className="infos-banner">
            <h2 className="page-title green"><span>toutes les infos</span></h2>

            <div className="infos-summary">
              <ul className="no-bullet-list">
                <li>
                  <Link to="/informations/#organisation">1<span className="horizontal-lign"></span> <span className="summary-text">le week-end</span></Link>
                </li>
                <li>
                  <Link to="/informations/#sleeping">2<span className="horizontal-lign"></span> <span className="summary-text">l'hébergement</span></Link>
                </li>
                <li>
                  <Link to="/informations/#dresscode">3<span className="horizontal-lign"></span> <span className="summary-text">le dress-code</span></Link>
                </li>
                <li>
                  <Link to="/informations/#gifts">4<span className="horizontal-lign"></span> <span className="summary-text">les cadeaux (ouais)</span></Link>
                </li>
                <li>
                  <Link to="/informations/#good-to-know">5<span className="horizontal-lign"></span> <span className="summary-text">bon à savoir (tout le reste, en gros)</span></Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="infos-container" id="organisation">

            <div className="infos-header">
              <h4>1</h4>
              <hr className="border-green"/>
              <h2 className="infos-title"><span>le week end</span></h2>
            </div>

            <div className="infos-content">
              <p>le week end du mariage aura lieu du dix-huit (18) octobre en soirée au vingt (20) octobre en fin de journée, à Saint Adolphe d’Howard, une charmante petite bourgade des Laurentides, à 1h30 environ de Montréal.</p>
              <p>vous pouvez arriver à l’heure qui vous sied le plus sur les lieux, la cérémonie en tant que telle sera célébrée à 16h, le samedi, dans le chalet principal, le Grand Lodge.</p>
              <p>le vendredi soir et le samedi matin seront un peu « chacun fait comme il veut », il y a des barbecues sur place, ainsi que tous les trucs normaux utiles en temps normal pour cuisiner. le dimanche matin, afin de se remettre des émotions - et des gin tonics - il y aura un fantastique brunch aux alentours de midi, toujours au Grand Lodge.</p>
              <AnimatedButton link="/location" value="découvrir le lieu" id="btn-infos" />
            </div>

          </div>
          {/* end of infos */}


          <div className="infos-container" id="sleeping">

            <div className="infos-header">
              <h4>2</h4>
              <hr className="border-green"/>
              <h2 className="infos-title"><span>l'hébergement</span></h2>
            </div>

            <div className="infos-content">
              <p>5 chalets sont réservés pour le weekend entier (il y a des pédalos et des plages privées sur le lac et des baby-foot et des barbecues dans chacun des chalets) (oui, c'est merveilleux).</p>
              <p>on demande à chacun une petite participation de 80$ CAD par personne (environ 60 euros) pour le weekend, pour l'hébergement.
              </p>
              <p>un petit peu comme en colonie de vacances, nous essaierons de mettre des amis ensemble, mais bon, peut-être que vous allez vous retrouver avec des gens que vous ne connaissez pas, mais écoutez, quelle meilleure occasion qu’un mariage pour rencontrer d’autres personnes, après tout ?
              </p>
              <AnimatedButton link="/reserver" value="réserver & payer l'hébergement" id="btn-hebergement" />
            </div>

          </div>
          {/* end of hebergement */}

          <div className="infos-container" id="dresscode" >

            <div className="infos-header">
              <h4>3</h4>
              <hr className="border-green"/>
              <h2 className="infos-title"><span>le dress code</span></h2>
            </div>

            <div className="infos-content">
              <p>un peu comme chez mac do*, venez comme vous êtes. si vous voulez porter un chapeau, vous pouvez porter un chapeau, si vous voulez porter des baskets, vous pouvez porter des baskets, si vous voulez porer un costume trois  pièces, vous pouvez porter un costumes trois pièces, écoutez, même si vous voulez venir en tongsm venez en tongs.</p>
              <p>gardez tout de même en tête que le mois d'octobre au Québec peut être fantastique, mais peut également être une catastrophe météorologique, alors bon, on vous conseille de prévoir une petite laine, comme on dit.</p>
              <p>(* mais ce sera meilleur qu'un anniversaire chez mac do)</p>
            </div>

          </div>
          {/* end of dress code*/}

          <div className="infos-container" id="gifts">

            <div className="infos-header">
              <h4>4</h4>
              <hr className="border-green"/>
              <h2 className="infos-title"><span>les cadeaux</span></h2>
            </div>

            <div className="infos-content">
              <p>c'est vraiment parce que 98% des gens ont posé la question, alors d'accord, si vous voulez nous offrir des cadeaux, nous n'y voyons aucun inconvénient.</p>
                            <p>comme nous sommes un couple moderne, nous avons fait une petite cagnotte en ligne qui nous aidera à financer notre voyage de noces au Chili (ou des croquettes pour Coco).</p>
              <AnimatedButton link="https://www.paypal.com/pools/c/8fXMV0Bbt7" value="participer à la cagnotte" id="btn-gift" />
            </div>

          </div>
          {/* end of #blob-four */}

          <div className="infos-container" id="good-to-know">

            <div className="infos-header">
              <h4>5</h4>
              <hr className="border-green"/>
              <h2 className="infos-title"><span>bon à savoir</span></h2>
            </div>

              <div className="columns-content">

              <div className="two-columns">
                <p>avant toute chose, ce mariage est un prétexte pour un gros weekend entre amis. si vous voulez partager avec nous (et tout le monde) votre (vos) bouteille(s) d’alcool - ou d’eau qui pique - favorite, ou toute spécialité culinaire de votre choix vous êtes les bienvenu(e)s, tant qu'il n'y a pas de betterave dans tout ça.</p>
                <p>de la même manière, si vous avez envie d’apporter un bout de mimolette et/ou de brie et/ou de saint nectaire et/ou vous avez compris l’idée, vous gagnerez un bisou (avant de manger du fromage qui pue).</p>
                <p>et puis aussi, apportez votre jeu de pétanque, de molki (Alex va perdre), de Uno (Camille va gagner), votre nécéessaire à point de croix, enfin bref, tout ce qui vous passe par la tête et vous fera passer un pur weekend de folie.</p>
              </div>

              <div className="two-columns">
                <p>si vous êtes allergique alimentairement à quelque chose - ou bien si vos convictions alimentaires sont particulières (par exemple véganisme), merci de nous le faire savoir assez rapidement.</p>
                <p>si vous êtes de nature maladroite (c’est à dire si vous cassez plus d’un verre par weekend), merci également de le faire savoir au comité organisateur - c’est à dire nous - afin de pouvoir vous donner des verres en carton (compostables) (évidemment).</p>
                <p>restez à l’affût, d’autres informations vous seront probablement communiquées dare-dare.</p>
              </div>
            </div>
            {/* end of .columns-content */}

          </div>
          {/* end of bon à savoir */}


        <Footer />

        <BlobOne id="infos-blob-one" />
        <BlobTwo id="infos-blob-two" />

      </div>
    )
  }
}

export default InformationsPage;
