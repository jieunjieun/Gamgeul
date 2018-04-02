import React from 'react';
import styles from './styles.css';

class EditTextStyle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>텍스트 스타일</div>
                <div className = {styles.functions}></div>
            </div>
        );
    }
}

export default EditTextStyle;