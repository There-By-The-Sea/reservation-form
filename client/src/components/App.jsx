import React from 'react';
import CalendarDateSelector from './CalendarDateSelector.jsx';
import ReservationForm from './ReservationForm.jsx';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reservations: 'RESERVATION OBJECT'
    }
  }

  render() {
    return (
      <div>
        <h1>APP</h1>
        <CalendarDateSelector />
        <ReservationForm />
      </div>
    )
  }
}

export default App