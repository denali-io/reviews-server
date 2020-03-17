/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/src/components/Review.jsx';
//
// Test rating for each review
describe('Review', () => {
  const review = {
    date: 20190627,
    rating: 2,
    body: 'fake text fake text fake text fake text',
    useful_count: 2,
    cool_count: 0,
    funny_count: 1,
    check_ins: 2,
  };
  const review2 = {
    date: 20191127,
    rating: 5,
    body: 'fake text fake text fake text fake text',
    useful_count: 0,
    cool_count: 0,
    funny_count: 0,
    check_ins: 1,
  };
  const review3 = {
    date: 20191127,
    rating: 5,
    body: 'fake text fake text fake text fake text',
    useful_count: 0,
    cool_count: 0,
    funny_count: 0,
    check_ins: 0,
  };
  it('displays the properly formatted date', () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.contains('6/27/2019')).toBe(true);
    const wrapper2 = shallow(<Review review={review2} />);
    expect(wrapper2.contains('11/27/2019')).toBe(true);
  });
  it('displays the main text of the review', () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.contains('fake text fake text fake text fake text')).toBe(true);
  });
  it('displays the correct number of check-ins', () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.contains('2 check-ins')).toBe(true);
    const wrapper2 = shallow(<Review review={review2} />);
    expect(wrapper2.contains('1 check-in')).toBe(true);
    const wrapper3 = shallow(<Review review={review3} />);
    expect(wrapper3.contains('check-ins')).toBe(false);
  });
  it('displays the vote buttons with the corresponding number of votes', () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find('[data-test="useful"]').text()).toEqual('Useful 2')
  });
});
