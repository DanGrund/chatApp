import React from 'react';
// const moment = require('moment');
import moment from 'moment';

export default class Title extends React.Component {
  render () {
    return (
      <div>
        <h1>This is chatapp-1c80 </h1>
        <input id="filter" placeholder ="search"/>
        <button id="sortUp">sort up</button>
        <button id="sortDown">sort down</button>
      </div>
    )
  }
}
