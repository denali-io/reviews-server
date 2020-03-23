import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VoteButtons from '../client/src/components/Review/VoteButtons/VoteButtons.jsx';


describe('Vote Buttons Component', () => {
  const testReview = {
    date: 20190627,
    rating: 3,
    body: 'fake text fake text fake text fake text',
    useful_count: 2,
    cool_count: 0,
    funny_count: 1,
  };
  const component = shallow(<VoteButtons review={testReview} />);
  it('should render the correct number of buttons', () => {
    const buttons = component.find('button');
    console.log(buttons)
    expect(buttons.length).toBe(3);
  });
  it ('each button should contain the corresponding icon', () => {
    expect(component.find('[funny-test="funny"]').length).toBe(1);
    expect(component.find('[useful-test="useful"]').length).toBe(1);
    expect(component.find('[cool-test="cool"]').length).toBe(1);
  });
  it('should show the number of votes in each button', () => {
    expect(component.find('[btn-test="useful"]').text()).toEqual('Useful 2');
    expect(component.find('[btn-test="funny"]').text()).toEqual('Funny 1');
    expect(component.find('[btn-test="cool"]').text()).toEqual('Cool ');
  });
});
