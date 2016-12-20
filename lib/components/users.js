import React from 'react';

export default class Users extends React.Component {
  render() {
    const userArray = this.props.getUserArray();
    return(
      <div>
        <ul id = "users">
          { userArray.map(user => <li key = {user.uid} id={user.uid} onClick = {() => this.props.searchUserArray(user.uid)} > {user.displayName } </li>) }
        </ul>
      </div>
    )
  }
}
