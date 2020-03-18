import React from 'react';
import { shallow } from 'enzyme';
import RatingBar from '../client/src/components/Review/RatingBar/RatingBar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


describe('RatingBar', () => {
  const review = {
    date: 20190627,
    rating: 3,
    body: 'fake text fake text fake text fake text',
    useful_count: 2,
    cool_count: 0,
    funny_count: 1,
  };

  const component = shallow(<RatingBar rating={review.rating} />);
  it('should render the appropriate number of stars', () => {
    const example = component.find(FontAwesomeIcon);
    expect(example.length).toBe(5);
  });
  it('should render the correct number of empty stars', () => {
    expect(component.find('[data-test="empty"]').length).toBe(2);
  });
  it('should render the correct number of empty stars', () => {
    expect(component.find('[data-test="full"]').length).toBe(3);
  });
});
