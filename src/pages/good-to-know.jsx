// external libs
import React from "react";
// import { Link } from 'gatsby';

// internal stuff
import SEO from "../components/seo";
import Header from '../components/header';
import Footer from '../components/footer';
// import SaveTheDate from '../components/savethedate';


// style & assets
import '../styles/main.scss';

// import BlobSmOne from '../images/blob-sm-1.svg';
// import BlobSmTwo from '../images/blob-sm-2.svg';
// import BlobLgOne from '../images/blob-lg-1.svg';
// import BlobLgTwo from '../images/blob-lg-2.svg';



class BonASavoir extends React.Component {

  render() {
    return (
      <div id="good-to-know">
        <SEO title="save the date" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />
        <Header color="dark" position="relative"/>

        <div className="container-fullheight" >

          <h1 className="accent-text">chers amis, chères famille, </h1>
          <h3 className="accent-text text-light">chers vous tous qui venez de France,</h3>
          <p>en plus de vous astreindre à quelques heures d'avion pour venir nous voir, comme on est un tout petit peu relous et exigeants, ce serait fabuleux si vous pouviez glisser dans vos valises un fromage (celui ou celle qui apportera de la mimolette aura des points bonus) + une bouteille de vin.</p>


          <Footer />

        {/* <BlobSmOne className="blob-sm-one"/>
          <BlobSmTwo className="blob-sm-two"/>
          <BlobLgOne className="blob-lg-one"/>
          <BlobLgTwo className="blob-lg-two"/> */}



        </div>
      </div>

    )
  }
}



export default BonASavoir
