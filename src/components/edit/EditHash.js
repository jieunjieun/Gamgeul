import React from 'react';
import styles from './styles.css'

class EditHash extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>해시태그</div>
                <div className = {styles.functions}></div>
            </div>
        );
    }
}

export default EditHash;