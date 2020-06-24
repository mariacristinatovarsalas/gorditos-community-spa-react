import React from 'react';
import { Link } from "react-router-dom";
import SubHeader from './SubHeader'
import GetUsers from './GetUsers'

class BodyUsers extends React.Component {
  
  render() {
    return(
      <div id="bodyUsers">
        <SubHeader />
        <div className="btn_container"><button><Link to="/register" className="link">Registrarse</Link></button></div>
        <GetUsers />
      </div>
    )
  }
}

export default BodyUsers 