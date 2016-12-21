import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import Application from '../lib/components/Application';
import Title from '../lib/components/Title';
import ChatWindow from '../lib/components/ChatWindow';
import MessageBar from '../lib/components/MessageBar';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should render a <Title /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Title)).to.have.length(1);
  });

  it('should render a <ChatWindow /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(ChatWindow)).to.have.length(1);
  });

  it('should render a <MessageBar /> component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(MessageBar)).to.have.length(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Application.prototype, 'componentDidMount');
      const wrapper = mount(<Application />);
      expect(Application.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('has a function called reversing', () => {
    const wrapper = shallow(<Application />);
    assert.isFunction(reversing);
  })
});
