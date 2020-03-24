import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Sort from '../client/src/components/Sort.jsx';

describe('The Sort Component', () => {
  it('calls "onClick" prop when the dropdown menu is clicked', () => {
    const wrapper = mount(
      <Sort toggle="sortBy" />
    );

    expect(wrapper.find('[data-test="highest"]').length).toBe(0);
    wrapper.find('input').simulate('click');
    expect(wrapper.find('[data-test="highest"]').length).toBe(1);
  });
});
