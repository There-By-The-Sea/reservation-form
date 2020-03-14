import React from 'react';
import CalendarDateSelector from './CalendarDateSelector.jsx';
import ReservationForm from './ReservationForm.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      propertyInfo: {}
    }
    this.getProperty = this.getProperty.bind(this);
    this.setStringsToState = this.setStringsToState.bind(this);
    this.handleReserveSubmit = this.handleReserveSubmit.bind(this)
  }

  componentDidMount() {
    this.getProperty(67)
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

  handleReserveSubmit(event) {
    event.preventDefault
    if (this.state.startDateString !== undefined && this.state.endDateString !== undefined) {
      var options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          checkin: this.state.startDateString,
          checkout: this.state.endDateString,
          property_id: this.state.propertyInfo.id
        })
      }
      fetch(`http://localhost:3000/reservations/book`, options)
        .then(response => {
          return response.json();
        })
        .then(reservations => {
          var sorted = reservations.slice().sort((b, a) => new Date(b.checkin) - new Date(a.checkin))
          var newPropertyInfo = this.state.propertyInfo
          newPropertyInfo.reservations = sorted
          this.setState({
            propertyInfo: newPropertyInfo
            //on success alert the user and refresh the page
          },() => { if(!alert('Start packing, your reservation was a Success!')){window.location.reload();}})
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {
    return (
      <div>
        <h1>APP</h1>
        {/* <CalendarDateSelector /> */}
        <ReservationForm property={this.state.propertyInfo} setStringsToState={this.setStringsToState} handleReserveSubmit={this.handleReserveSubmit}/>
      </div>
    )
  }
}

export default App