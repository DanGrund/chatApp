import React from 'react';
// const moment = require('moment');
import moment from 'moment';

export default class Title extends React.Component {
  constructor () {
    super();
    this.state  = {
      reversed: false,
    };
  }

  // function that takes messages array and flips it, then toggles
  // reverse state.
  render () {
    return (
      <div id = "title">
        <h1>This is chatapp-1c809 </h1>
        <input id="filter" placeholder ="search"/>
        <button className="sort" id="sortUp" onClick={ ()=> this.props.reversing() }>sort!</button>
        {/* <button className="sort" id="sortDown">sort down</button> */}
      </div>
    )
  }
}
