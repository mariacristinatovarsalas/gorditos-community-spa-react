import React from 'react';
import logo from '../images/logo.png'
import { Link } from "react-router-dom";

class BodyHome extends React.Component {

  render() {
    return (
      <div className="body">
        <div className="container">
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
            <img id="bodyHomeImg" src={logo} alt="Logo"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default BodyHome