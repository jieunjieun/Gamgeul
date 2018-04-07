import React from 'react';
import styles from './style.scss';
import img from '../../../assets/logo.svg';

var logo = {
    width: "180px",
    height: "80px",
    position: "absolute",
    left: "25px",
    top: "25px",
    backgroundImage: `url(${ img })`,
    backgroundSize: "70% auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: "3"
}

class Logo extends React.Component{
    render() {
        return(
            <div className = {styles.logo} style = { logo }>
                
            </div>
        );
    }
}

export default Logo;