import React from 'react';
import logo from "./logo.png"
//import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

/* ALL APP */

function App() {
  return (
    <div>
      <Header spancolor="yellow"/>
      <BrowserRouter>
          <Route exact path='/' component={BodyHome} />
          {/* <Route exact path='/users' component={BodyUsers} /> */}
          <Route exact path='/users' render={() => <BodyUsers nameclass={"position"} />} />
          <Route exact path='/register' component={BodyRegister} />
      </BrowserRouter>
    </div>
  );
}

export default App;

/* HEADER */

class Header extends React.Component {
  render() {
    return (
        <header>
          <img src={logo} alt="Cuisine" className="logo"></img>
          <h1>Gorditos <span style={{color:this.props.spancolor}}>Community</span></h1>
        </header>
    );
  }
}

/* BODY HOME */

class BodyHome extends React.Component {
  render() {
    return (
      <div className="body">
        <div>
          <h3>Gorditos <span>Community</span></h3>
          <p>Es una plataforma para el encuentro de
            aquellos que compartimos algo muy especial: el amor por la comida. 
            Seas cocinero o cocinera profesional, amateur o simplemente amante de la comida, 
            ¡Este es tu lugar!
          </p>
          <button><Link to="/users" className="link">Entrar</Link></button>
        </div>
        <div>
          <img id="bodyHomeImg" src={logo} alt="Cuisine"></img>
        </div>
      </div>
    )
  }
}

/* SUBHEADER */

class SubHeader extends React.Component {
  render() {
    return(
      <div className="subheader" style={{justifyContent: this.props.position, alignItems: this.props.position}}>
        <img src={logo} className="logo" alt="Cuisine"></img>
        <h2>Gorditos <span>Community</span></h2>
      </div>
    )
  }
}

/* BODY USERS */

class BodyUsers extends React.Component {
  render() {
    return(
      <div id="bodyUsers">
        <SubHeader />
        <button className={this.props.nameclass}><Link to="/register" className="link">Registrarse</Link></button>
        
          <GetUsers />
    
      </div>
    )
  }
}


/* GET USERS */

const API = 'http://192.168.0.174:3000/users/get_all';
//const DEFAULT_QUERY = 'sci-fi';
 
class GetUsers extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      users: [],
    };
  }
 
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ users: data.users_array }));
  }
 
  render() {
    const { users } = this.state;
    return (
      <div id="usersContainer">
        { console.log(users) }
          {users.map(user =>
          // <div id="userDiv" key={user.id}>
          //   <div><img src="https://img2.pngio.com/generic-person-logo-logodix-generic-person-icon-png-649_659.png" id="userImg" alt="person"></img></div>
          //   <div>
          //     <div className="userData">{user.full_name}</div>
          //     <div className="userData">{user.email}</div>
          //     <div className="userData">{user.phone_number}</div>
          //   </div>
          // </div> 

          <User name={user.full_name} email={user.email} phone={user.phone_number} key={user.id} />

          )} 
      </div>
    );
  }
}

/* BODY REGISTER */

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

      const url_create_user = 'http://192.168.0.174:3000/users/create';

      var createUserData = {

        username: this.state.username,
        full_name: this.state.fullname,
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


    return(
      <div id="bodyRegister">
        
        <SubHeader position="left"/>

        <div className="registerBody body">

          <div className="badgeContainer">
          <div id="badge">
              <Header spancolor="yellow" />
              <img src="https://img2.pngio.com/generic-person-logo-logodix-generic-person-icon-png-649_659.png" id="userImg2" alt="person"></img>
              <div id="nameContainer">{this.state.name}</div>
              <div id="emailContainer">{this.state.email}</div>
              <div id="phoneContainer">{this.state.phone}</div>
          </div>
          </div>

          <div className="formContainer">
            <form>
              <h4>New Member</h4>
              <label>Full name</label>
              <input type="text" onChange={(event) => this.setState({name: event.target.value })}></input>
              <label>Email</label>
              <input type="text" onChange={(event) => this.setState({...this.state,email: event.target.value })}></input>
              {/* El "desestructuring" en este caso lo que hace es agregar el email al estado dejando las otras propiedas que ya tiene. */}
              <label>Phone number</label>
              <input type="text" onChange={(event) => this.setState({phone: event.target.value })}></input>
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







class User extends React.Component {

  // constructor(props) {
  
    
  // }

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

// 'http://192.168.0.58:3000/users/get_all'