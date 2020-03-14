import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class CheckinDateCal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      i: 0
    }

    this.dateRangeFinder = this.dateRangeFinder.bind(this);
    this.blockedDateChecker = this.blockedDateChecker.bind(this);
  }


  componentDidUpdate() {
    if (this.state.startDate & this.state.endDate) {
      this.props.setStringsToState(this.state.startDate, this.state.endDate);
    }
    if (this.state.blockedDates === undefined) {
      this.setState({
        blockedDates: this.dateRangeFinder()
      })
    }
  }
  
  
  blockedDateChecker() {
    var i = 0
    return (day) => {
      var year = day.year();
      var month = day.month();
      var date = day.date();
      var blockedDates = this.state.blockedDates
      if (year == blockedDates[i].getFullYear()) {
        if (month == blockedDates[i].getMonth()) {
          if (date == blockedDates[i].getDate()) {
            i++
            return true;
          }
        }
      }
      return false;
    }
  }

  //this function outputs an array of all the blocked dates in 
  dateRangeFinder() {
    var reservations = this.props.reservations.sort((b, a) => new Date(b.checkin) - new Date(a.checkin));
      var blockedDates = []; 
      reservations.forEach(reservation => {
        var diffTime = Math.abs(new Date(reservation.checkout) - new Date (reservation.checkin));
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        var i = 0;
        var checkinDate = new Date(reservation.checkin);
        blockedDates.push(new Date(checkinDate));
        while (i < diffDays) {
          var nextDate = checkinDate.setDate(checkinDate.getDate() + 1);
          blockedDates.push(new Date(nextDate));
          i++
        }
      })
    return blockedDates;
  }

  render() {
    var i = 0;
    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          startDatePlaceholderText={'Check-in'}
          endDatePlaceholderText={'Check-out'}
          isDayBlocked={this.blockedDateChecker(i)}
        />
      </div>
    )
  }
}


export default CheckinDateCal;