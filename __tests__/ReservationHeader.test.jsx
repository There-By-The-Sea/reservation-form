import React from 'react';
import { shallow } from 'enzyme';
import ReservationHeader from '../client/src/components/ReservationHeader';
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
  test('should render the ReservationHeader', () => {
    var wrapper = shallow(<ReservationHeader rating={sampleData.avg_rating} price={sampleData.price_per_night} />);
    expect(wrapper).toExist()
  });
})