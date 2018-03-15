import React from 'react';
import styles from './style.css';
import Logo from './Logo';
import Description from './Description';
import Func from './Functions';
import Info from './Info';
import backImg from '../../assets/main_background.jpg';

var basicStyle = {
    width: "100vw",
    height: "500px",
    backgroundImage: `url(${ backImg })`,
    backgroundPosition: "50%",
    justifyContents: "center",
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
}

class Basic extends React.Component {
    render() {
        return(
            <div className = {styles.basic}   style={ basicStyle }>
                <Logo/>
                <Info/>
                <Description/>
                <Func/>
            </div>
        );
    }
}

export default Basic;