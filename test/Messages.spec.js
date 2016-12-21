import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Application from '../lib/components/Application';
import Title from '../lib/components/Title';
import ChatWindow from '../lib/components/ChatWindow';
import MessageBar from '../lib/components/MessageBar';
let sinon = require('sinon');
