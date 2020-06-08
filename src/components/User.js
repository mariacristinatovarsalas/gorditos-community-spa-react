import React from 'react';

class User extends React.Component {

  render() {
    return(
      <div className="userDiv">
          <div><img src="https://img2.pngio.com/generic-person-logo-logodix-generic-person-icon-png-649_659.png" className="userImg" alt="person"></img></div>
          <div>
            <div className="userData">{this.props.name}</div>
            <div className="userData">{this.props.email}</div>
            <div className="userData">{this.props.phone}</div>
          </div>
      </div> 
    )
  }
}

export default User