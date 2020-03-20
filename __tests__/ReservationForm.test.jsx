import React from 'react';
import { shallow } from 'enzyme';
import ReservationForm from '../client/src/components/ReservationForm';
import "isomorphic-fetch";

//Sample Data to be used in render
const sampleData = {
  avg_rating: 3.14,
  price_per_night: 413,
  reservations: [
    {
      property_id: 3
    },
    {
      property_id: 5
    }
  ],
  maxGuests: 8
}

describe('Unit Tests - Reservation Form', () => {
  test('should render the ReservationForm', () => {
    var wrapper = shallow(<ReservationForm property={sampleData} />);
    expect(wrapper).toExist()
  });
  test('displayPaymentCalculator should be null if nights prop is equal to 0', () => {
    var wrapper = shallow(<ReservationForm property={sampleData} nights={0} />);
    expect(wrapper.find('.ReservationForm')).toHaveLength(1)
  });
  test('displayPaymentCalculator should be null if nights prop is equal to 0', () => {
    var wrapper = shallow(<ReservationForm property={sampleData} nights={1} />);
    expect(wrapper.find('.ReservationFormWithCalculator')).toHaveLength(1)
  });

  //expect it to have propertyInfo as props
  //expect it to have a setStringsToState method as props
  //expect it to have a handleReserveSubmit method as props

  //not sure if these tests are necessary??
})