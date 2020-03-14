import React from 'react';
import { shallow } from 'enzyme';
import ReservationForm from '../client/src/components/ReservationForm';
import "isomorphic-fetch";

describe('Unit Tests - Reservation Form', () => {
  test('should render the app', () => {
    var wrapper = shallow(<reservationForm />);
    expect(wrapper).toExist()
  });
})