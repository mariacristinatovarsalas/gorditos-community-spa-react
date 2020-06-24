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
 
  // API FETCH
  // componentDidMount() {
  //   fetch(url_get_all_users)
  //     .then(response => response.json())
  //     .then(data => this.setState({ users: data.users_array }));
  // }

  // MOCK DATA FOR GITHUB PAGE
  componentDidMount() {

    const mock_users = [

      { id: "1", full_name: "Michael Jackson", email: "michaeljackson@gmail.com", phone_number: "4294967295" },
      { id: "2", full_name: "Calamardo Esponja", email: "calamardoesponja@gmail.com", phone_number: "94848393" },
      { id: "3", full_name: "Pedro Picapiedra", email: "pedropicapiedra@gmail.com", phone_number: "1247466245" },
      { id: "4", full_name: "Patricio Estrella", email: "patricioestrella@gmail.com", phone_number: "7768595943" },
      { id: "5", full_name: "Peter Pan", email: "peterpan@gmail.com", phone_number: "49857574893" },
      { id: "6", full_name: "Frodo Baggins", email: "frodobaggins@gmail.com", phone_number: "1394857533" },
      { id: "7", full_name: "Clark Kent", email: "clarkkent@gmail.com", phone_number: "8867689392" },
      { id: "8", full_name: "Captain America", email: "captainamerica@gmail.com", phone_number: "8447575843" },
      { id: "9", full_name: "Paty Mayonnaise", email: "patymayonnaise@gmail.com", phone_number: "42338374656" }
  
    ]

      this.setState({ users: mock_users })
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