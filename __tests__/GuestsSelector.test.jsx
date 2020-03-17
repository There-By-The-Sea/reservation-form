import React from 'react';
import { shallow } from 'enzyme';
import GuestsSelector from '../client/src/components/GuestsSelector';
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
  test('should render the GuestsSelector', () => {
    var wrapper = shallow(<GuestsSelector maxGuests={sampleData.maxGuests} />);
    expect(wrapper).toExist()
  });
})