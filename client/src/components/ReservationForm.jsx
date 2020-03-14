import React from 'react';
import ReservationHeader from './ReservationHeader.jsx';
import ReservationDateSelector from './ReservationDateSelector.jsx';
import PaymentCalculator from './PaymentCalculator.jsx';
import GuestsSelector from './GuestsSelector.jsx';
import ReserveButton from './ReserveButton.jsx';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='ReservationForm'>
        <ReservationHeader rating={this.props.property.avg_rating} price={this.props.property.price_per_night}/>
        <ReservationDateSelector setStringsToState={this.props.setStringsToState} reservations={this.props.property.reservations} />
        <GuestsSelector maxGuests={this.props.property.maxGuests}/>
        <ReserveButton handleReserveSubmit={this.props.handleReserveSubmit} />
      </div>
    )
  }
}

//ONLY DISPLAY PAYMENT CALCULATOR IF CHECK IN AND CHECKOUT NIGHTS HAVE BEEN SELECTED

export default ReservationForm