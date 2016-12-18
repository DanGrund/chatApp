import React from 'react';
// const moment = require('moment');
import moment from 'moment';

export default class Title extends React.Component {
  render () {
    return (
      <div id = "title">
        <h1>This is chatapp-1c80 </h1>
        <input id="filter" placeholder ="search"/>
        <button className="sort" id="sortUp">sort up</button>
        <button className="sort" id="sortDown">sort down</button>
      </div>
    )
  }
}
