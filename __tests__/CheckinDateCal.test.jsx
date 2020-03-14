import React from 'react';
import { shallow } from 'enzyme';
import CheckinDateCal from '../client/src/components/CheckinDateCal';
import "isomorphic-fetch";
import moment from 'moment';

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

var newMoment = moment({ year :1996, month :5, date :4});
var newMoment2 = moment({ year :1996, month :6, date :26});

var blockedMoment1 = moment({ year :2020, month :2, date :12});
var blockedMoment2 = moment({ year :2020, month :2, date :13});

var notBlockedMoment = moment({ year :2019, month :7, date :15});

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
  test('should invoke the setStringToState from the props when a startDate and endDate are added to states', () => {
    const mockSetStringsToState = jest.fn();
    const wrapper = shallow(<CheckinDateCal setStringsToState={mockSetStringsToState} reservations={sampleReservations}/>);
    const instance = wrapper.instance();
    wrapper.setState({
      startDate: newMoment,
      endDate: newMoment2
    })

    expect(instance.props.setStringsToState).toBeCalled();
  });
  test('when the function that is returned from calling blockedDatesChecker is invoked it should return false when the dates DO NOT match', () => {
    const wrapper = shallow(<CheckinDateCal reservations={sampleReservations}/>);
    const instance = wrapper.instance();
    wrapper.setState({
      blockedDates: instance.dateRangeFinder()
    });
    const momentChecker = instance.blockedDateChecker();
    expect(momentChecker(blockedMoment1)).toBe(true);
    expect(momentChecker(blockedMoment2)).toBe(true);
  });
  test('when the function that is returned from calling blockedDatesChecker is invoked it should return true when the dates DO match', () => {
    const wrapper = shallow(<CheckinDateCal reservations={sampleReservations}/>);
    const instance = wrapper.instance();
    wrapper.setState({
      blockedDates: instance.dateRangeFinder()
    });
    expect(instance.blockedDateChecker()(notBlockedMoment)).toBe(false);
  });
});