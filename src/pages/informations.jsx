import React from 'react';

import { defineContentLanguage } from '../helpers/helpers';

import BlobOne from "../images/infos-blob-1.svg";
import BlobTwo from "../images/infos-blob-2.svg";
import BlobThree from "../images/infos-blob-3.svg";
import BlobFour from "../images/infos-blob-4.svg";
import Header from "../components/header";



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
        <Header language={this.state.language} color="light" tagline="text"/>

        <div className="blobs infos-container" >

          <div className="blob" id="blob-one">
            <BlobOne width="189" height="190" />
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
      {/* end of .blobs #blob-one */}

        <div className="blobs infos-container" >

          <div className="blob" id="blob-two">
            <BlobTwo width="207" height="204" />
            <h2>2</h2>
            <h4 className="infos-title"><span>{data.sleeping.title}</span></h4>
          </div>

          <div className="main-container" >
            <div className="infos-content" id="sleeping">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cum nam beatae ipsa dignissimos suscipit impedit molestiae repellat,
              ratitwo enim, molestias odit magni aspernatur minima iure earum ullam ab itaque? Officiis!
              </p>
            </div>
          </div>

        </div>
      {/* end of .blobs #blob-two */}

        <div className="blobs infos-container" >

          <div className="blob" id="blob-three">
            <BlobThree width="206" height="206" />
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
      {/* end of .blobs #blob-three */}

        <div className="blobs infos-container" >

          <div className="blob" id="blob-four">
            <BlobFour width="191" height="189" />
            <h2>4</h2>
            <h4 className="infos-title"><span>{data.gifts.title}</span></h4>
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
      {/* end of .blobs #blob-three */}

      </div>
    )
  }
}

export default InformationsPage;
