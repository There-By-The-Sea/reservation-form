import React from 'react';

const ReservationHeader = (props) => {
  return (
    <div className='ReservationHeader'>
      <div>
        <span id='price'>$470 </span>
        <span id='text'>per night</span>
      </div>
      <div>
        <span id='star'>★</span>
        <span id='text'>4.89 </span>
        <span id='reviews-amount'>{'(19 reviews)'}</span>
      </div>
    </div>
  )
}

export default ReservationHeader;