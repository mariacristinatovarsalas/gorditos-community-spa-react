import React from 'react';
import Header from './Header'
import SubHeader from './SubHeader'


class BodyRegister extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      name: "",
      email: "",
      phonenumber: "",
      username: "",
      address: "",
      password: ""
    };
  }

  render() {
  
    const postData = async () => {

      const url_create_user = 'http://' + process.env.REACT_APP_IP_ADDRESS + ':' + process.env.REACT_APP_PORT + '/users/create';

      var createUserData = {

        username: this.state.username,
        full_name: this.state.name,
        email: this.state.email,
        phone_number: this.state.phonenumber,
        address: this.state.address,
        password: this.state.password
  
      }
  
      var res = await fetch(url_create_user, {
  
        method: 'POST',
        body: JSON.stringify(createUserData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
  
      var data = await res.json();
      console.log(data)
    }


    return (

      <div id="bodyRegister">

        <SubHeader />

        <div className="registerBody body">
          <div className="badgeContainer">
            <div id="badge">
              <Header spancolor="yellow" />
              <img src="https://img2.pngio.com/generic-person-logo-logodix-generic-person-icon-png-649_659.png" id="userImg2" alt="person"></img>
              <div id="nameContainer">{this.state.name}</div>
              <div id="emailContainer">{this.state.email}</div>
              <div id="phoneContainer">{this.state.phonenumber}</div>
            </div>
          </div>

          <div className="formContainer">
            <form>
              <h4>New Member</h4>
              <label>Full name</label>
              <input type="text" onChange={(event) => this.setState({name: event.target.value })}></input>
              <label>Email</label>
              <input type="text" onChange={(event) => this.setState({...this.state, email: event.target.value })}></input>
              <label>Phone number</label>
              <input type="text" onChange={(event) => this.setState({...this.state, phonenumber: event.target.value })}></input>
              <label>Username</label>
              <input type="text" onChange={(event) => this.setState({username: event.target.value })}></input>
              <label>Address</label>
              <input type="text" onChange={(event) => this.setState({address: event.target.value })}></input>
              <label>Password</label>
              <input type="password" onChange={(event) => this.setState({password: event.target.value })}></input>
              <button onClick={postData}>Enviar</button>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default BodyRegister