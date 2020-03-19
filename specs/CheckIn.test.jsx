import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CheckIn from '../client/src/components/Review/CheckIn/CheckIn.jsx';

describe('Check-in Component', () => {
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
  const checkIn = shallow(<CheckIn review={review} />);
  const noCheckIn = shallow(<CheckIn review={review3} />);

  it('displays a check-in icon if the user has checked-in', () => {
    const hasCheckIcon = checkIn.contains(<FontAwesomeIcon icon={faCheckCircle} className="checkInIcon" />);
    expect(hasCheckIcon).toBe(true);
  });
  it('displays a check-in icon if the user has checked-in', () => {
    const hasCheckIcon = noCheckIn.contains(<FontAwesomeIcon icon={faCheckCircle} className="checkInIcon" />);
    expect(hasCheckIcon).toBe(false);
  });
  it('displays the correct number of check-ins', () => {
    const wrapper = shallow(<CheckIn review={review} />);
    expect(wrapper.contains(' 2 check-ins')).toBe(true);
    const wrapper2 = shallow(<CheckIn review={review2} />);
    expect(wrapper2.contains(' 1 check-in')).toBe(true);
    const wrapper3 = shallow(<CheckIn review={review3} />);
    expect(wrapper3.contains('check-ins')).toBe(false);
  });
});
