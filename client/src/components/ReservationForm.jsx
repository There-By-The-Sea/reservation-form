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
      <div className='ReservationForm'>
        <ReservationHeader />
        <ReservationDateSelector />
        <GuestsSelector />
        <ReserveButton />
      </div>
    )
  }
}

//ONLY DISPLAY PAYMENT CALCULATOR IF CHECK IN AND CHECKOUT NIGHTS HAVE BEEN SELECTED

export default ReservationForm