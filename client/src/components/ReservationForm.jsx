import React from 'react';
import ReservationHeader from './ReservationHeader.jsx';
import ReservationDateSelector from './ReservationDateSelector.jsx';
import PaymentCalculator from './PaymentCalculator.jsx';
import GuestsSelector from './GuestsSelector.jsx';
import ReserveButton from './ReserveButton.jsx';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      property: 'PropertyObject_ GOES HERE'
    }
  }

  render() {
    return (
      <div>
        <h2>ReservationForm</h2>
        <ReservationHeader />
        <ReservationDateSelector />
        <PaymentCalculator />
        <GuestsSelector />
        <ReserveButton />
      </div>
    )
  }
}

export default ReservationForm