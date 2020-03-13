import React from 'react';
import CalendarDateSelector from './CalendarDateSelector.jsx';
import ReservationForm from './ReservationForm.jsx';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      propertyInfo: {}
    }
    this.getProperty.bind(this);
  }

  componentDidMount() {
    this.getProperty(71)
  }

  getProperty(propertyId) {
    fetch(`http://localhost:3000/reservations/plan?propertyId=${propertyId}`)
      .then(response => {
        return response.json();
      })
      .then(propertyData => {
        this.setState({
          propertyInfo: propertyData.property[0]
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>APP</h1>
        <CalendarDateSelector />
        <ReservationForm property={this.state.propertyInfo}/>
      </div>
    )
  }
}

export default App