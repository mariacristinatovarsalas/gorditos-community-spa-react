import React from 'react';
import User from './User'

const url_get_all_users = 'http://' + process.env.REACT_APP_IP_ADDRESS + ':' + process.env.REACT_APP_PORT + '/users/get_all';
 
class GetUsers extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      users: [],
    };
  }
 
  componentDidMount() {
    fetch(url_get_all_users)
      .then(response => response.json())
      .then(data => this.setState({ users: data.users_array }));
  }
 
  render() {
    const { users } = this.state;
    return (
      <div id="usersContainer">
        { console.log(users) }
          {users.map(user =>
          <User name={user.full_name} email={user.email} phone={user.phone_number} key={user.id} />
          )} 
      </div>
    );
  }
}

export default GetUsers