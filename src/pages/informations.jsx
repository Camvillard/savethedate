// external libs
import React from 'react';
import { Link } from 'gatsby';

// internal stuff
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


  render(){
    return(
      <div id="infos-page">

        <Header color="dark"/>

        <div className="top-container">

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
                <p>on demande à chacun une petite participation de 80$ CAD par personne (environ 60 euros) pour le weekend, pour l'hébergement.
                </p>
                <p>un petit peu comme en colonie de vacances, nous essaierons de mettre des amis ensemble, mais bon, peut-être que vous allez vous retrouver avec des gens que vous ne connaissez pas, mais écoutez, quelle meilleure occasion qu’un mariage pour rencontrer d’autres personnes, après tout ?
                </p>
                <div className="links-decorated">
                  <Link to="/reserver" className="text-strong link-block">
                    <Arrow className="link-decoration"/>
                    réserver & payer l'hébergement
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
                <p>(* mais ce sera meilleur qu'un anniversaire chez mac do)</p>
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
                <p>comme nous sommes un couple moderne, nous avons fait une petite cagnotte en ligne qui nous aidera à financer notre voyage de noces au Chili (ou des croquettes pour Coco).</p>
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

          <div className="infos-container" >

            <div className="blob" id="infos-blob-five">
              <BlobOne />
              <h2>5</h2>
              <h4 className="infos-title"><span>bon à savoir</span></h4>
            </div>

            <div className="main-container" >
              <div className="columns-content" id="bon à savoir">

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
            {/* end of main-container */}

          </div>
          {/* end of #blob-five */}

        </div>
        {/* end of .blobs */}


        <Footer />


      </div>
    )
  }
}

export default InformationsPage;
