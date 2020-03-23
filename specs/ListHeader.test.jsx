import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListHeader from '../client/src/components/ListHeader.jsx';

describe('List Header Component', () => {
  it('renders', () => {
    const wrapper = shallow(<ListHeader />);
    expect(wrapper.exists()).toBe(true);
  });
  it('user text is echoed', () => {
    const wrapper = shallow(<ListHeader performSearch={() => {}} />);
    wrapper.find('input').simulate('change', {
      target: { value: 'hello' },
    });
    expect(wrapper.find('input').props().value).toEqual('hello');
  });
  it('when the searchBar is queried, the default event is prevented', () => {
    const wrapper = shallow(<ListHeader searchHandle={() => {}}/>);
    let prevented = false;
    wrapper.find('button').simulate('click', {
      preventDefault: () => {
        prevented = true;
      },
    });
    expect(prevented).toBe(true);
  });
});
