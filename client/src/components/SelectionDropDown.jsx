import React from 'react';


const SelectionDropDown = (props) => {
  return (
    <div className='selctionDropDown'>
      <div className='ageRange'>
        <div className='ageRangeDescription' className='guestCategory' id='adults'>Adults</div>
        <div className='minusContainer'>
          <div className='minus'>-</div>
        </div>
        <div className='guestNumber'>1</div>
        <div className='plusContainer'>
          <div className='plus'>+</div>
        </div>
      </div>
      <div className='ageRange'>
        <div className='ageRangeDescription'>
          <div className='guestCategory'>Children</div>
          <div className='guestCategoryDescription'>Ages 2-12</div>
        </div>
        <div className='minusContainer'>
          <div className='minus'>-</div>
        </div>
        <div className='guestNumber' value='0'>0</div>
        <div className='plusContainer'>
          <div className='plus'>+</div>
        </div>
      </div>
      <div className='ageRange'>
        <div className='ageRangeDescription'>
          <div className='guestCategory'>Infants</div>
          <div className='guestCategoryDescription'>Under 2</div>
        </div>
        <div className='minusContainer'>
          <div className='minus'>-</div>
        </div>
        <div className='guestNumber' value='0'>0</div>
        <div className='plusContainer'>
          <div className='plus'>+</div>
        </div>
      </div>
      <div id='totalGuests'>
        {props.maxGuests} guests maximum. Infants don’t count toward the number of guests.
      </div>
      <div id="close">
        Close
      </div>
    </div>
  )
}

export default SelectionDropDown;