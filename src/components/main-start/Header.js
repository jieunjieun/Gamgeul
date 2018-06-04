import React, { Component }from 'react';
import Logo from './Logo';
import Info from './Info'
import styles from './style.scss'
class Header extends Component {
  render(){
    return(
      <div className = {styles.header}>
        <Logo />
        <Info />
      </div>
    )
  }
}

export default Header