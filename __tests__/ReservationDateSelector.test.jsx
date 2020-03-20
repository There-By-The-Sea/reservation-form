import React from 'react';
import { shallow } from 'enzyme';
import ReservationDateSelector from '../client/src/components/ReservationDateSelector';
import "isomorphic-fetch";

var sampleReservations = [
  {
    id: 1300,
    checkin: "2020-03-16T06:00:00.000Z",
    checkout: "2020-03-20T06:00:00.000Z",
    property_id: 67
  },
  {
    id: 859,
    checkin: "2020-03-12T06:00:00.000Z",
    checkout: "2020-03-13T06:00:00.000Z",
    property_id: 67
  },
  {
    id: 1304,
    checkin: "2020-03-14T06:00:00.000Z",
    checkout: "2020-03-15T06:00:00.000Z",
    property_id: 67
  }
]

describe('Unit Tests - Reservation Form', () => {
  test('should render the ReservationDateSelector', () => {
    var wrapper = shallow(<ReservationDateSelector reservations={sampleReservations} />);
    expect(wrapper).toExist()
  });
})