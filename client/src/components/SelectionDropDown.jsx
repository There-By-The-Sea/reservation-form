import React from 'react';

class SelectionDropDown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    var plusAdults = 'plus'
    if (this.props.adults + this.props.children >= this.props.maxGuests) {
      plusAdults = 'lightPlus';
    }
    var minusAdults = 'minus'
    if (this.props.adults < 2) {
      minusAdults = 'lightMinus';
    }
    var plusChildren = 'plus'
    if (this.props.adults + this.props.children >= this.props.maxGuests) {
      plusChildren = 'lightPlus';
    }
    var minusChildren = 'minus'
    if (this.props.children < 1) {
      minusChildren = 'lightMinus';
    }
    var plusInfants = 'plus'
    if (this.props.infants >= this.props.maxGuests) {
      plusInfants = 'lightPlus';
    }
    var minusInfants = 'minus'
    if (this.props.infants < 1) {
      minusInfants = 'lightMinus';
    }
    return (
      <div className='selctionDropDown'>
        <div className='ageRange'>
          <div className='ageRangeDescription' className='guestCategory' id='adults'>Adults</div>
          <div className='minusContainer' onClick={this.props.handleDecrement}>
            <div className={minusAdults} id='adults'>-</div>
          </div>
            <div className='guestNumber'>{this.props.adults}</div>
          <div className='plusContainer' onClick={this.props.handleIncrement}>
            <div className={plusAdults} id='adults'>+</div>
          </div>
        </div>
        <div className='ageRange'>
          <div className='ageRangeDescription'>
            <div className='guestCategory'>Children</div>
            <div className='guestCategoryDescription'>Ages 2-12</div>
          </div>
          <div className='minusContainer' onClick={this.props.handleDecrement}>
            <div className={minusChildren} id='children'>-</div>
          </div>
          <div className='guestNumber' >{this.props.children}</div>
          <div className='plusContainer' onClick={this.props.handleIncrement}>
            <div className={plusChildren} id='children'>+</div>
          </div>
        </div>
        <div className='ageRange'>
          <div className='ageRangeDescription'>
            <div className='guestCategory'>Infants</div>
            <div className='guestCategoryDescription'>Under 2</div>
          </div>
          <div className='minusContainer' onClick={this.props.handleDecrement}>
            <div className={minusInfants} id='infants'>-</div>
          </div>
            <div className='guestNumber' value='0'>{this.props.infants}</div>
          <div className='plusContainer' onClick={this.props.handleIncrement}>
            <div className={plusInfants} id='infants'>+</div>
          </div>
        </div>
        <div id='totalGuests'>
          {this.props.maxGuests} guests maximum. Infants don’t count toward the number of guests.
        </div>
        <div id="close" onClick={this.props.displayDropDown}>
          Close
        </div>
      </div>
    )
  }
}

export default SelectionDropDown;