import React from 'react';

import SelectionDropDown from './SelectionDropDown.jsx';

const GuestsSelector = (props) => {
  return (
    <div className='GuestsSelector'>
      <span id='text'>Guests</span>
      <div className='guestbutton'>
        <div id='numberofguests'>2 guests</div>
        <div id='downarrow'>v</div>
      </div>
    </div>
  )
}


export default GuestsSelector;

//DISPLAY DROPDOWN WHEN CLICKED

