import React from 'react';
import CheckinDateCal from './CheckinDateCal.jsx';

const ReservationDateSelector = (props) => {
  return (
    <div className='ReservationDateSelector'>
      <span id='text'>Dates</span>
        <div>
          <CheckinDateCal setStringsToState={props.setStringsToState} reservations={props.reservations} />
        </div>
    </div>
  )
}

export default ReservationDateSelector;

//When checkin or checkout is clicked I will need to render the corresponding components