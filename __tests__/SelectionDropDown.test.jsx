import React from 'react';
import { shallow } from 'enzyme';
import SelectionDropDown from '../client/src/components/SelectionDropDown';
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
  test('should render the SelectionDropDown', () => {
    var wrapper = shallow(<SelectionDropDown maxGuests={sampleData.maxGuests} />);
    expect(wrapper).toExist()
  });
  test('add adult/children guest should be light when the combonation of adults and children is more than or equal to the maxGuests', () => {
    var wrapper = shallow(<SelectionDropDown maxGuests={sampleData.maxGuests} adults={8} children={0} infants={0} />);
    expect(wrapper.find('.lightPlus')).toHaveLength(2)
  })
  test('add adult/children guest should be light when the combonation of adults and children is more than or equal to the maxGuests', () => {
    var wrapper = shallow(<SelectionDropDown maxGuests={sampleData.maxGuests} adults={0} children={8} infants={0} />);
    expect(wrapper.find('.lightPlus')).toHaveLength(2)
  })
  test('add adult/children guest should be light when the combonation of adults and children is more than or equal to the maxGuests', () => {
    var wrapper = shallow(<SelectionDropDown maxGuests={sampleData.maxGuests} adults={3} children={5} infants={0} />);
    expect(wrapper.find('.lightPlus')).toHaveLength(2)
  })
  test('add infant guest should be light when the number of infants is more than or equal to the maxGuests', () => {
    var wrapper = shallow(<SelectionDropDown maxGuests={sampleData.maxGuests} adults={1} children={0} infants={8} />);
    expect(wrapper.find('.lightPlus')).toHaveLength(1)
  })
  test('remove adult guest should be light when the number of adults is equal to 0', () => {
    var wrapper = shallow(<SelectionDropDown maxGuests={sampleData.maxGuests} adults={1} children={3} infants={2} />);
    expect(wrapper.find('.lightMinus')).toHaveLength(1)
  })
  test('remove children guest should be light when the number of children is equal to 0', () => {
    var wrapper = shallow(<SelectionDropDown maxGuests={sampleData.maxGuests} adults={2} children={0} infants={5} />);
    expect(wrapper.find('.lightMinus')).toHaveLength(1)
  })
  test('remove infant guest should be light when the number of infants is equal to 0', () => {
    var wrapper = shallow(<SelectionDropDown maxGuests={sampleData.maxGuests} adults={4} children={2} infants={0} />);
    expect(wrapper.find('.lightMinus')).toHaveLength(1)
  })
})