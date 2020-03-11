import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reservations: 'RESERVATION OBJECT'
    }
  }

  render() {
    return <h2>Reservation Form</h2>
  }
}

export default App