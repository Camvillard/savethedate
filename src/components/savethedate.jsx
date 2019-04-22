import React from "react";
import { Link } from "gatsby";

import content from '../data/content';

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
    const requestFr = `https://calendar.google.com/calendar/r/eventedit?text=${content.fr.eventName}&dates=20191019T170000Z/20191021T170000Z&location=${content.fr.eventLocation}&sprop=name:Name&sprop=website:EventWebite&details=${content.fr.eventDetails}&sf=true&output=xml`
    const requestEn = `https://calendar.google.com/calendar/r/eventedit?text=${content.fr.eventName}&dates=20191019T170000Z/20191021T170000Z&location=${content.fr.eventLocation}&sprop=name:Name&sprop=website:EventWebite&details=${content.fr.eventDetails}&sf=true&output=xml`
    return (
      <div id="savethdedate-content">

        {/* #date */}
        <div id="date">
          <h5 id="savethedate"><span>save the date</span></h5>
          <h2 id="cinq" className="text-strong accent-text">{this.displayDate(this.props.language)}</h2>
          <h2 id="annee" className="text-normal accent-text">{this.displayYear(this.props.language)}</h2>
        </div>
        {/* /#date */}

        {/* rsvp */}
        <div id="rsvp-cta">
          <Link to="rsvp">RSVP</Link>
        </div>
        {/* /#rsvp */}

        {/* links */}
        <div id="links">
          <a target="_blank" href={requestFr}>ajouter à mon agenda</a>
          <span>{' // '}</span>
          <Link to="/nous-contacter">contact</Link>
        </div>
        {/* links */}

      </div>
    )
  }
}



export default SaveTheDate
