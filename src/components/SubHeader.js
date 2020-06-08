import React from 'react';
import logo from '../images/logo.png'

class SubHeader extends React.Component {

  render() {
    return(
      <div className="subheader">
        <img src={logo} className="logo" alt="Cuisine"></img>
        <h2>Gorditos <span>Community</span></h2>
      </div>
    )
  }
}

export default SubHeader