import React from 'react';
import { shallow } from 'enzyme';
import CheckinDateCal from '../client/src/components/CheckinDateCal';
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

describe('Unit Tests - CheckinDateCal', () => {
  test('should render the CheckinDateCal', () => {
    var wrapper = shallow(<CheckinDateCal/>);
    expect(wrapper).toExist()
  });
  test('should invoke the blockedDateChecker method that will return a function', () => {
    const wrapper = shallow(<CheckinDateCal />);
    const instance = wrapper.instance();
    expect(typeof instance.blockedDateChecker()).toBe('function')
  });
  test('should invoke the dateRangeFinder method that will return an array', () => {
    const wrapper = shallow(<CheckinDateCal reservations={sampleReservations} />);
    const instance = wrapper.instance();
    expect(Array.isArray(instance.dateRangeFinder())).toBe(true)
  });
  test('should invoke the dateRangeFinder method that will return an array of all blocked dates', () => {
    const wrapper = shallow(<CheckinDateCal reservations={sampleReservations} />);
    const instance = wrapper.instance();
    expect(instance.dateRangeFinder().length).toBe(9)
  });
})