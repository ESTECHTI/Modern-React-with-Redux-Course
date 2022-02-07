import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons'
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    iconName: faSun
  },
  winter: {
    text: "Burr it is cold",
    iconName: faSnowflake
  }
}

const getSeason = (lat, month, year) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log('season', season)
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
        <h1>{text}</h1>
      <FontAwesomeIcon 
        className='icon-right' 
        style={ season === 'summer' ? { color: 'orange'} : season === 'winter' ? {color: 'aliceblue'} : ''} 
        icon={iconName} 
        size="6x"
      />
    </div>
  )
}

export default SeasonDisplay;