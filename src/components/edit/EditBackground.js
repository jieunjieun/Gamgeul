import React from 'react';
import styles from './styles.css'

class EditBackground extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>배경</div>
                <div className = {styles.functions}></div>
            </div>
        );
    }
}

export default EditBackground;