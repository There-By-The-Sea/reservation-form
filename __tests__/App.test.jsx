import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';
import "isomorphic-fetch";
import moment from 'moment';

describe('Unit Tests - App', () => {
  test('should render the app', () => {
    var wrapper = shallow(<App />);
    expect(wrapper).toExist()
  });
  test('should invoke getProperty on componentDidMount', () => {
    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().getProperty = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  });
  test('should invoke the createStringDate method that will return a string version of a simple date', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.createStringDate(2020, 6, 4)).toBe('2020-6-4')
  });
  test('should invoke the setStringsToState method that will properly set the state', () => {
    var newMoment = moment({ year :1996, month :5, date :4});
    var newMoment2 = moment({ year :1996, month :6, date :26})
    
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(wrapper.state('startDateString')).toBe(undefined);
    expect(wrapper.state('endDateString')).toBe(undefined);
    instance.setStringsToState(newMoment, newMoment2);
    expect(wrapper.state('startDateString')).toBe('1996-6-4');
    expect(wrapper.state('endDateString')).toBe('1996-7-26');
  });

  //need to add a test for the intial get request that happend when component mounts
  //need to add a test that will test the functionality of the reserveButton when it is clicked
})