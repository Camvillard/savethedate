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

            <div className="blob" id="blob-one">
              <BlobOne />
              <h2>1</h2>
              <h4 className="infos-title"><span>{data.organisation.title}</span></h4>
            </div>

            <div className="main-container" >
              <div className="infos-content" id="organisation">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum nam beatae ipsa dignissimos suscipit impedit molestiae repellat,
                ratione enim, molestias odit magni aspernatur minima iure earum ullam ab itaque? Officiis!
                </p>
              </div>
            </div>

          </div>
          {/* end of #blob-one */}

          <div className="infos-container" >

            <div className="blob" id="blob-two">
              <BlobTwo />
              <h2>2</h2>
              <h4 className="infos-title"><span>{data.sleeping.title}</span></h4>
            </div>

            <div className="main-container" >
              <div className="infos-content" id="sleeping">
                <p>{data.sleeping.content}</p>
                <div className="links-decorated">
                  <Link to="/reserver" className="text-strong link-block">
                    <Arrow className="link-decoration"/>
                    nous faire signe pour un hébergement
                  </Link>
                </div>
                <div className="links-decorated">
                  <a className="link-block text-strong" href="https://fr.airbnb.ca/wishlists/481630144" target="_blank" rel="noopener noreferrer">
                    <Arrow className="link-decoration"/>
                    découvrir les chalets (canons)
                  </a>
                </div>
              </div>
            </div>

          </div>
          {/* end of #blob-two */}

          <div className="infos-container" >

            <div className="blob" id="blob-three">
              <BlobThree />
              <h2>3</h2>
              <h4 className="infos-title"><span>{data.dressCode.title}</span></h4>
            </div>

            <div className="main-container" >
              <div className="infos-content" id="dresscode">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum nam beatae ipsa dignissimos suscipit impedit molestiae repellat,
                ratitwo enim, molestias odit magni aspernatur minima iure earum ullam ab itaque? Officiis!
                </p>
              </div>
            </div>

          </div>
          {/* end of #blob-three */}

          <div className="infos-container" >

            <div className="blob" id="blob-four">
              <BlobFour />
              <h2>4</h2>
              <h4 className="infos-title"><span>{data.gifts.title}</span></h4>
            </div>

            <div className="main-container" >
              <div className="infos-content" id="gifts">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum nam beatae ipsa dignissimos suscipit impedit molestiae repellat,
                ratitwo enim, molestias odit magni aspernatur minima iure earum ullam ab itaque? Officiis!
                </p>
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
