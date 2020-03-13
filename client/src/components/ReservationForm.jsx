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
      property: this.props.property
    }
    this.setStringsToState = this.setStringsToState.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  createStringDate(year, month, day) {
    var stringDate = '';
    stringDate += year.toString();
    stringDate += '-' + month.toString() + '-';
    stringDate += day.toString()
    return stringDate
  }

  setStringsToState(startDate, endDate) {
    var startDateString = this.createStringDate(startDate.year(), startDate.month() + 1, startDate.date());
    var endDateString = this.createStringDate(endDate.year(), endDate.month() + 1, endDate.date());
    if(startDateString !== this.state.startDateString || endDateString !== this.state.endDateString) {
      this.setState({
        startDateString,
        endDateString
      })
    }
  
  }

  render() {
    return (
      <div className='ReservationForm'>
        <ReservationHeader rating={this.props.property.avg_rating} price={this.props.property.price_per_night}/>
        <ReservationDateSelector setStringsToState={this.setStringsToState} reservations={this.props.property.reservations} />
        <GuestsSelector maxGuests={this.props.property.maxGuests}/>
        <ReserveButton />
      </div>
    )
  }
}

//ONLY DISPLAY PAYMENT CALCULATOR IF CHECK IN AND CHECKOUT NIGHTS HAVE BEEN SELECTED

export default ReservationForm