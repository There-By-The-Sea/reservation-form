import React from 'react';

const ReservationHeader = (props) => {
  return (
    <div className='ReservationHeader'>
      <div>
        <span id='price'>${props.price} </span>
        <span id='text'>per night</span>
      </div>
      <div>
        <span id='star'>★</span>
        <span id='text'>{props.rating} </span>
        <span id='reviews-amount'>{'(19 reviews)'}</span>
      </div>
    </div>
  )
}

export default ReservationHeader;