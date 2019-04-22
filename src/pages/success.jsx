import React from 'react';
import { Link } from 'gatsby'

import content from '../data/content';

import '../styles/main.scss'

class SuccessPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      language: ''
    }
  }

  componentDidMount() {
    // first things first, we define the global language accordingly to the browser
    this.setState({
      language: navigator.language
    })
  }

  defineContent = () => {
    // check all the variations for french in the browser
    // (google chrome or firefox)
    const french = ['fr-FR', 'fr']
    // const english = ['en-EN', 'en']
    if (french.includes(this.state.language)) {
      // grab the french data
      return content.fr
    } else {
      // grab english data
      return content.eng
    }
  }


  render() {
    const data = this.defineContent();
    return(
      <div id="success-page">
        <h1>{data.successHeader}</h1>
        <h5>{data.successTagline}</h5>
        <Link to="/">{data.backToSite}</Link>
      </div>
    )
  }
}

export default SuccessPage;
