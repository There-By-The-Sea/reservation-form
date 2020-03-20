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
    }
  }

  render() {
    var displayPaymentCalculator = null;
    var ReservationFormStyling = 'ReservationForm'
    if (this.props.nights > 0) {
      displayPaymentCalculator = (
        <PaymentCalculator 
          price={this.props.property.price_per_night} 
          fee={this.props.property.service_fee}
          startDateString={this.props.startDateString}
          endDateString={this.props.endDateString}
          nights={this.props.nights}
        />
      )
      ReservationFormStyling = 'ReservationFormWithCalculator'
    }
    return (
      <div className={ReservationFormStyling}>
        <ReservationHeader 
          rating={this.props.property.avg_rating} 
          price={this.props.property.price_per_night}
        />
        <ReservationDateSelector 
          setStringsToState={this.props.setStringsToState} 
          reservations={this.props.property.reservations} 
        />
        <GuestsSelector 
          maxGuests={this.props.property.max_guest}
        />
        {displayPaymentCalculator}
        <ReserveButton 
          handleReserveSubmit={this.props.handleReserveSubmit} 
        />
      </div>
    )
  }
}

//ONLY DISPLAY PAYMENT CALCULATOR IF CHECK IN AND CHECKOUT NIGHTS HAVE BEEN SELECTED

export default ReservationForm