import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application';

require('./scss/reset.css');
require('./scss/style.scss');

render(<Application />, document.getElementById('application'));
