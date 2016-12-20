import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Application from '../lib/components/Application';
import ChatWindow from '../lib/components/ChatWindow';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it.skip('contains a chat window', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.contains(<ChatWindow />), true);
  });

  it('is able to append a new message to the screen', () => {
    var spy = sinon.spy(addNewMessage)
    assert.isFunction(wrapper.contains(addNewMessage),

    // const wrapper = shallow(<Application />);
  });

  it.skip('can get a user array', () => {
    const wrapper = shallow(<Application />);
    assert.isFunction(wrapper.contains(getUserArray));
  });
});
