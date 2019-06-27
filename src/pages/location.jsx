// external libs
import React from 'react';

// internal stuff
import Header from "../components/header";

// style & assets
import "../styles/main.scss"
import MapCeremonie from "../images/map-ceremonie.svg"
import MapGenerale from "../images/map_generale.svg"

class Location extends React.Component {


  render(){
    return(
      <div id="location-page">
        <Header color="dark"/>

        <img src="https://res.cloudinary.com/camvillard/image/upload/v1561596647/dixneufoctobre/map_generale.png" alt=""/>

        <div className="large-container">

          <div className="location-details">
            <p>la cérémonie (enfin, le weekend tout entier) se déroulera au 1438, chemin de Jamboree, à Saint Adolphe d’howard, charmant petit village québécois tout près des pistes de ski que nous n’utiliserons pas parce qu’a priori, il ne neigera pas encore, mais enfin, on ne sait pas vraiment.</p>
            <p>pour arriver là bas en voiture, c’est plutôt fastoche, depuis Montréal, vous trouvez un moyen de rejoindre l’autoroute 15, et après c’est tout schuss jusqu’à ce que votre GPS vous dise de tourner à droite.</p>
            <p>si vous cherchez un coivoiturage ou avez des places dans une voiture, vous seriez des anges de nous faire signe, nous essaierons de mettre en contact tout le monde pour que tout se passe comme sur des roulettes.</p>
            <p>évidemment, comme faire venir 52 personnes de l’autre côté de l’Atlantique fait de ce mariage une catastrophe écologique, si vous voulez venir en train ou en bus, c’est tout à fait possible puisque la gare de Saint Sauveur est tout tout proche. Alex se fera un plaisir de venir vous chercher, parce qu’il évitera les corvées de déco de dernière minute (et aussi parce qu’il est très serviable quand il s’agit de prendre une voiture pour aller chercher des gens).</p>
          </div>
          {/* end of .location-details */}

          <div className="ceremony-details">
            <MapCeremonie />
          </div>

        </div>
        {/* end of .main-container */}
      </div>
    )
  }
}

export default Location;
