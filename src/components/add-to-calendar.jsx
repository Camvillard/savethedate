// external libs
import React from 'react';
import { Link } from 'gatsby';

// internal stuff
import { defineContentLanguage } from "../helpers/helpers";

// assets & styles

const AddToCalendar = () => {
  const data = defineContentLanguage(navigator.language).footer;
  const request = `https://calendar.google.com/calendar/r/eventedit?text=${data.eventName}&dates=20191019T170000Z/20191021T170000Z&location=${data.eventLocation}&sprop=name:Name&sprop=website:EventWebite&details=${data.eventDetails}&sf=true&output=xml`
  return(
    <span id="calendar">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={request}
      >
        {data.calendar}
      </a>
    </span>
  )

}
export default AddToCalendar;
