import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders App with className app', () => {
  const wrapper = shallow(
    <App />
  );
  console.log(wrapper.debug());
  expect(wrapper.find('.app').length).toEqual(1)
});

it('initial state starts with an empty array', () =>{
  const wrapper = shallow(
    <App />
  );
  const expectedState = {
    thoughts:[]
  };
  expect(wrapper.state()).toEqual(expectedState);
});


it('having 2 thoughts in state should mean there are two thoughtCards', () => {
  const ideas =
  [ { title: 'title 1', body: 'body1' },
  { title: 'title 2', body: 'body2'}]

  const wrapper = mount(
    <App />
  );

  wrapper.setState({'thoughts': ideas})
  expect(wrapper.find('ThoughtCard').length).toBe(2)

});

it('user can add a new thought and its added to state and displayed on the screen', () => {
  const wrapper = mount(
    <App />
  )
  const inputTitle = wrapper.find('#title')
  const inputBody = wrapper.find('#body')
  const submitButton = wrapper.find('.submit')

  inputTitle.simulate('change', { target: {value: 'title'}})
  inputBody.simulate('change', { target: {value: 'body'}})
  submitButton.simulate('click')

  expect(wrapper.state().thoughts.length).toEqual(1)
  console.log(wrapper.find('ThoughtCard').get(0).props)
  // i will add text to the title and body inputs
  // i will click the button to submit
  // i expect to see the title and body inputs on the dom as a card
  // and i expect to see the state change from empty strings to populated strings

});
