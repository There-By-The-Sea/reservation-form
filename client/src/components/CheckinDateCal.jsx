import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class CheckinDateCal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidUpdate() {
    if (this.state.startDate & this.state.endDate) {
      this.props.setStringsToState(this.state.startDate, this.state.endDate);
    }
  }

  render() {

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
        />
      </div>
    )
  }
}


export default CheckinDateCal;