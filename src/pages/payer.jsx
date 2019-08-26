// external libs
import React from 'react';
import { Link } from 'gatsby'

// internal stuff
import SEO from "../components/seo";
import Navbar from "../components/navbar";
import BackHome from "../components/back-home";

// internal stuff
import AnimatedButton from "../components/animated-button";

// style & assets
import BlobOne from "../images/blob_homepage-2.svg";
import BlobTwo from "../images/blob_homepage-1.svg";

// style & assets
import '../styles/main.scss';

class SuccessPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      numOfPeople: 0
    }
  }

  componentDidMount() {
    console.log(this.props)
  if (!this.props.location.state) {
     this.setState({
      numOfPeople: 'des'
     })
   } else {
     this.setState({
      numOfPeople: this.props.location.state.reservation.people
     });
   }
  }

  render() {
    const people = this.state.numOfPeople
    return(
      <React.Fragment>
        <SEO  title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <div id="page-payer" className="container-fullpage">

        <Navbar
          linksColor="white"
          bgColor="green"
          sidebarColor="yellow"
          toggleColor="green"
        />

        <div className="main-container small">
          <h1>fantastique</h1>
          <p>On prend note et on vous réserve {people} places.</p>
          <p>Afin d'être tout à fait tranquilles jusqu'au jour J, vous pouvez payer tout de suite vos places (que la technologie est pratique). Le lien vous redirigera vers Paypal, parce  que c'est bien pratique, mais si vous n'avez pas de compte Paypal, vous pouvez tout aussi bien faire un virement Interac ou tout autre moyen de paiement qui vous plaira - on n'est pas vraiment pas compliqués hein.</p>
          <AnimatedButton link={`https://www.paypal.me/CamilleVillard/${this.state.numOfPeople * 80}`} value="payer l'hébergement" id="btn-hebergement" />
        </div>

        <BackHome />


        </div>
      </React.Fragment>
    )
  }
}

export default SuccessPage;
