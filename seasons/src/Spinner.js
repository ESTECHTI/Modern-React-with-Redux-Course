import React from 'react';
import './css/Spinners.css'

const Spinner = (props) => {
  return (
    <div className='loader--message'>
      <div className="loader">
      </div>
      <p>{props.message}</p>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner