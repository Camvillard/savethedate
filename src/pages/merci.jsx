import React from 'react';
import { Link } from 'gatsby';

import content from '../data/content';

import BlobSmOne from '../images/blob-sm-1.svg';
import BlobSmRsvp from '../images/blob-sm-rsvp.svg';

import BlobLgOne from '../images/blob-lg-1.svg';
import BlobLgTwo from '../images/blob-lg-2.svg';

export default () => {
  const french = ['fr-FR', 'fr']
  const data = french.includes(navigator.language) ? content.fr : content.eng;
  return(
    <div id="thanks-page">

      <BlobSmOne id="blob-sm-one"/>
      <BlobSmRsvp id="blob-sm-rsvp"/>
      <BlobLgOne id="blob-lg-one"/>
      <BlobLgTwo id="blob-lg-two"/>
      <h1>{data.contactSuccess}</h1>
      <h5>{data.contactContent}</h5>
      <Link to="/">{data.backToSite}</Link>
    </div>
    )
}
