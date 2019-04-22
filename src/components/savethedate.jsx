import React from "react";
import { Link } from "gatsby";

import content from '../data/content';
import { defineContentLanguage } from '../helpers/helpers';

import '../styles/main.scss';
import BlobOne from '../images/blobs-1.svg';
import BlobTwo from '../images/blob-2.svg';



class SaveTheDate extends React.Component {

  displayDate = (language) => {
    const french = ['fr-FR', 'fr']
    let date = ''
    french.includes(language) ? date = content.fr.date : date = content.eng.date;
    return date
  }

  displayYear = (language) => {
    const french = ['fr-FR', 'fr']
    let year = ''
    french.includes(language) ? year = content.fr.year : year = content.fr.year;
    return year
  }

  render() {
    const data = defineContentLanguage(this.props.language, content);
    const requestFr = `https://calendar.google.com/calendar/r/eventedit?text=${data.eventName}&dates=20191019T170000Z/20191021T170000Z&location=${data.eventLocation}&sprop=name:Name&sprop=website:EventWebite&details=${data.eventDetails}&sf=true&output=xml`
    const requestEn = `https://calendar.google.com/calendar/r/eventedit?text=${data.eventName}&dates=20191019T170000Z/20191021T170000Z&location=${data.eventLocation}&sprop=name:Name&sprop=website:EventWebite&details=${data.eventDetails}&sf=true&output=xml`
    return (
      <div id="savethdedate-content">

        {/* #date */}
        <div id="date">
          <h5 id="savethedate"><span>save the date</span></h5>
          <h2 id="cinq" className="text-strong accent-text">{data.date}</h2>
          <h2 id="annee" className="text-normal accent-text">{data.year}</h2>
        </div>
        {/* /#date */}

        {/* rsvp */}
        <div id="rsvp-cta">
          <Link to="/rsvp">RSVP</Link>
        </div>
        {/* /#rsvp */}

        {/* links */}
        <div id="links">
          <a target="_blank" href={requestFr}>{data.calendar}</a>
          <span>{' // '}</span>
          <Link to="/nous-contacter">contact</Link>
        </div>
        {/* links */}

      </div>
    )
  }
}



export default SaveTheDate
