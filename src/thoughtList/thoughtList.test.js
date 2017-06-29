import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const wrapper = shallow(
      <ThoughtList />
    );
    // console.log(wrapper.debug())
    expect(wrapper.find('.thoughtList').length).toBe(1)
  });

  it('has multiple ThoughtCard class fields', () => {
    const wrapper = shallow(
      <ThoughtList />
    );
    expect(wrapper.find('.thoughtCard').length).toBe(2)
  });

});
