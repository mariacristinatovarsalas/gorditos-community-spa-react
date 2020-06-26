import React from 'react';
import logo from '../images/logo.png'

const Header = () => {

    return (
        <header>
          <img src={logo} alt="Cuisine" className="logo"></img>
          <h1>Gorditos <span style={{color:this.props.spancolor}}>Community</span></h1>
        </header>
    );
}

export default Header