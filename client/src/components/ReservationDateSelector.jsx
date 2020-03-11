import React from 'react';
import CheckinDateCal from './CheckinDateCal.jsx';
import CheckoutDateCal from './CheckoutDateCal.jsx'

const ReservationDateSelector = (props) => {
  return (
    <div>
      <h3>ReservationDateSelector</h3>
      <CheckinDateCal />
      <CheckoutDateCal />
    </div>
  )
}

export default ReservationDateSelector;