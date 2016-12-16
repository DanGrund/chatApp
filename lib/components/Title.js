import React from 'react';

export default class Title extends React.Component {
  render () {
    return (
      <div>
        <h1>This is chatapp-1c80</h1>
        <input id="filter"/>
        <button id="sortUp">sort up</button>
        <button id="sortDown">sort down</button>
      </div>
    )
  }
}
