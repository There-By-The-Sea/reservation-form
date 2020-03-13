import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class CheckinDateCal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
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

  blockedDateChecker(day) {
    var year = day.year();
    var month = day.month();
    var date = day.date();
    var isBlocked = false;
    this.state.blockedDates.forEach(blockedDate => {
      if (year === blockedDate.getFullYear() && month === blockedDate.getMonth() && date === blockedDate.getDate()) {
        return true;
      } 
      console.log(year, blockedDate.getFullYear())
      console.log(month, blockedDate.getMonth())
      console.log(date, blockedDate.getDate())
    })
    return false;
  }

  //this function outputs an array of all the blocked dates in 
  dateRangeFinder() {
    var reservations = this.props.reservations;
      if (reservations !== undefined) {
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
  }

  render() {
    console.log('reservations: ', this.props.reservations)
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
          isDayBlocked={this.blockedDateChecker}
        />
      </div>
    )
  }
}


export default CheckinDateCal;