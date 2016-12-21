import React from 'react';

export default class Title extends React.Component {

  render() {
    return (
      <div id = "title">
        <h1>THIS! is chatapp-1c809 </h1>
        <input id="filter" placeholder ="search" onChange={(e) => this.props.searchMessages(e.target.value) }/>
        <button className="sort" id="sortUp" onClick={ () => this.props.reversing() }>sort!</button>
      </div>
    );
  }
}
