// external libs
import React from 'react';
import { Link } from 'gatsby'

// internal stuff
import SEO from "../components/seo";

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
  if (typeof window === 'undefined') {
     return;
   }
   this.setState({
    numOfPeople: this.props.location.state.reservation.people
   });
  }

  render() {
    return(
      <React.Fragment>
        <SEO  title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />

        <div id="page-payer" className="container-fullpage">

        <div className="page-container">

          <h1>todo bueno</h1>
          <h5>et merci mucho mucho !<br/>on prend note et on vous réserve {this.state.numOfPeople} places.</h5>
          <p>afin d'être tout à fait tranquilles jusqu'au jour J, vous pouvez payer tout de suite vos places (que la technologie est pratique).</p>
          <a href={`https://www.paypal.me/CamilleVillard/${this.state.numOfPeople * 80}`} className="button-green">mais oui, payer maintenant</a>
          <Link to="/">retour à l'accueil</Link>
        </div>


        </div>
      </React.Fragment>
    )
  }
}

export default SuccessPage;
