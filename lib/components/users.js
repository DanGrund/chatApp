import React from 'react';
import {keyBy} from 'lodash';

export default class Users extends React.Component {

  render() {
    const userArray = this.getUserArray();

    return(
      <div>
        <ul id = "users">
          { userArray.map(user => <li key = {user.uid} id={user.uid} onClick = {() => this.props.searchUserArray(user.uid)} > {user.displayName } </li>) }
        </ul>
      </div>
    )
  }

  getUserArray() {
    let userList = keyBy(this.props.messages, 'user.displayName');
    let userNameArray = (Object.keys(userList));
    let userArray = [];
    userNameArray.forEach((userName)=>{
      userArray.push(userList[userName].user);
    });
    return userArray;
  }
  
}
