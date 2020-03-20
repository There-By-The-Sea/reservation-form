import React from 'react';
import { shallow } from 'enzyme';
import ReserveButton from '../client/src/components/ReserveButton';
import "isomorphic-fetch";

describe('Unit Tests - Reservation Form', () => {
  test('should render the ReserveButton', () => {
    var wrapper = shallow(<ReserveButton />);
    expect(wrapper).toExist()
  });
  test('should invoke the handleReserveSubmit prop when the reserve button is clicked', () => {
    const mockhandleReserveSubmit = jest.fn();
    const wrapper = shallow(
      <ReserveButton
        handleReserveSubmit={mockhandleReserveSubmit}
      />
    );
    const reserveButton = wrapper.find('.ReserveButton');
    console.log('reserveButton: ', reserveButton)
    reserveButton.simulate('click');
    expect(mockhandleReserveSubmit).toHaveBeenCalled();
  });
})