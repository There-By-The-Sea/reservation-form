import React from 'react';
import CheckinDateCal from './CheckinDateCal.jsx';
import CheckoutDateCal from './CheckoutDateCal.jsx'

const ReservationDateSelector = (props) => {
  return (
    <div className='ReservationDateSelector'>
      <span id='text'>Dates</span>
      <div className='checkinandout'>
        <div id='checkinandout'>Check-in</div>
        <div id='arrow'>-></div>
        <div id='checkinandout'>Check-out</div>
      </div>
    </div>
  )
}

export default ReservationDateSelector;

//When checkin or checkout is clicked I will need to render the corresponding components