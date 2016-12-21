import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Application from '../lib/components/Application';
import Title from '../lib/components/Title';
import ChatWindow from '../lib/components/ChatWindow';
import MessageBar from '../lib/components/MessageBar';
let sinon = require('sinon');

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

  it('should save messages to state', () => {
    const wrapper = mount(<MessageBar />);
    wrapper.setState({messages: [{
      user: {
        displayName: 'Dan',
        uid: 1
      },
      content: 'Pizza Rat'},
      {user: {
        displayName: 'Anna',
        uid: 2
        },
      content: 'Papaya Pan'
      }]
    });
    expect(wrapper.state('messages').length).to.equal(2);
  });

  it('should render an input field', () => {
    const wrapper = shallow(<MessageBar />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should render a clear button', () => {
    const wrapper = shallow(<MessageBar />)
    expect(wrapper.find('.clear')).to.have.length(1);
  });

  it('the input field should clear if user clicks clear button', () => {
    const wrapper = mount(<MessageBar />);
    const input = wrapper.find('input');
    const clearButton = wrapper.find('.clear');

    input.simulate('change', {target: {value: 'hello'} });
    expect(wrapper.state('draftMessage')).to.equal('hello');
    clearButton.simulate('click');
    expect(wrapper.state('draftMessage')).to.equal('');
  });

  it('should have a character counter', () => {
    const wrapper = shallow(<MessageBar />)
    expect(wrapper.find('#count')).to.have.length(1);
  });

  it('should render a submit button', () => {
    const wrapper = shallow(<MessageBar />)
    expect(wrapper.find('.submit')).to.have.length(1);
  });

  it('should clear the input field when a message is submitted', () => {
    const wrapper = mount(<MessageBar />);
    const input = wrapper.find('input');
    const characterCount = wrapper.find('#count');
    const submitButton = wrapper.find('.submit')

    input.simulate('change', {target: {value: 'hello'} });
    expect(wrapper.state('draftMessage')).to.equal('hello');
    submitButton.simulate('click');
    expect(wrapper.state('draftMessage')).to.equal('');
    expect(characterCount.text()).to.equal('0');
  });

  it('should update state.draftMessage as a message is typed', () => {
    const wrapper = mount(<MessageBar />);
    const input = wrapper.find('input');

    expect (wrapper.state('draftMessage')).to.equal('');
    input.simulate('change', {target: {value: 'HEYYYYYYY'} });
    expect (wrapper.state('draftMessage')).to.equal('HEYYYYYYY');
  })

});
