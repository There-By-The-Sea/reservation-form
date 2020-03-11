import React from 'react';
import Calendars from './Calendars.jsx';
import CalendarHeader from './CalendarHeader.jsx';

class CalendarDateSelector extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h2>CalendarDateSelector</h2>
        <CalendarHeader />
        <Calendars />
      </div>
    )
  }
}

export default CalendarDateSelector