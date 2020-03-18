import React from 'react';
import SelectionDropDown from './SelectionDropDown.jsx';

class GuestsSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      adults: 1,
      children: 3,
      infants: 0,
      displayDropDown: false
    }
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.displayDropDown = this.displayDropDown.bind(this);
  }

  handleIncrement(event) {
    var age = event.target.id;
    var currentNumberPlusOne = this.state[age] + 1
    console.log(currentNumberPlusOne);
    this.setState({
      [age]: currentNumberPlusOne
    })
  }

  handleDecrement(event) {
    var age = event.target.id;
    var currentNumberPlusOne = this.state[age] - 1
    console.log(currentNumberPlusOne);
    this.setState({
      [age]: currentNumberPlusOne
    })
  }

  displayDropDown() {
    console.log('clicked')
    this.setState({
      displayDropDown: !this.state.displayDropDown
    })
  }



  render() {
    var infantCount = ''
    if (this.state.infants > 0) {
      infantCount = ', ' + this.state.infants.toString() + ' Infants'
    }
    var dropDown = null;
    if (this.state.displayDropDown) {
      dropDown =(
        <SelectionDropDown 
        maxGuests={this.props.maxGuests} 
        adults={this.state.adults} 
        children={this.state.children} 
        infants={this.state.infants}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        displayDropDown={this.displayDropDown}
        />
      )
    }
    return (
      <div>
        <div className='GuestsSelector'>
          <span id='text'>Guests</span>
          <div className='guestbutton' onClick={this.displayDropDown}>
            <div id='numberofguests'>{this.state.adults + this.state.children} guests{infantCount}</div>
            <div id='downarrow'>v</div>
          </div>
            {dropDown}
        </div>
      </div>
    )
  }

}


export default GuestsSelector;

//DISPLAY DROPDOWN WHEN CLICKED

