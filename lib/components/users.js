import React from 'react';
import { keyBy } from 'lodash';

export default class Users extends React.Component {

  getUserArray() {
    const userList = keyBy(this.props.messages, 'user.displayName');
    const userNameArray = (Object.keys(userList));
    const userArray = [];
    userNameArray.forEach((userName) => {
      userArray.push(userList[userName].user);
    });
    return userArray;
  }

  render() {
    const userArray = this.getUserArray();

    return (
      <div>
        <ul id = "users">
          { userArray.map(user => <li key = {user.uid} id={user.uid}
            onClick = {() => this.props.filterByUser(user.uid)} >
            {user.displayName } </li>) }
            <button onClick = {() => this.props.clearFilterArray()}>Show All</button>
        </ul>
      </div>
    );
  }

}
