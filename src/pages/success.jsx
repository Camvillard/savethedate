import React from 'react';
import { Link } from 'gatsby'

import content from '../data/content';
import { defineContentLanguage } from '../helpers/helpers'
import SEO from "../components/seo";

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

  render() {
    const data = defineContentLanguage(this.state.language, content);
    return(
      <div id="success-page">
        <SEO id="success" title="bien reçu !" keywords={[`savethedate`, `dix neuf octobre`, `graphisme`]} />
        <h1>{data.successHeader}</h1>
        <h5>{data.successTagline}</h5>
        <Link to="/">{data.backToSite}</Link>
      </div>
    )
  }
}

export default SuccessPage;
