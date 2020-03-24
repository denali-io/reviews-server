import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from '../client/src/components/App.jsx';
import Pagination from '../client/src/components/Pagination.jsx';

describe('The Pagination Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('The component renders with the appropriate number of links', () => {
  it('renders 4 links if there are 21 total reviews', () => {
    const wrapper = shallow(<Pagination />);
    wrapper.setProps({ totalReviews: 21 });
    expect(wrapper.find('a').length).toBe(4);
  });
  it('renders 7 links if there are 100 reviews', () => {
    const wrapper = shallow(<Pagination />);
    wrapper.setProps({ totalReviews: 100 });
    expect(wrapper.find('a').length).toBe(7);
  });
});

describe('The Next and Previous links', () => {
  it('it displays the next page of links when clicked', () => {
    const wrapper = mount(<App />);
  });
});
