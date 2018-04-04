import React from 'react';
import styles from './styles.css';

class EditTextBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>텍스트박스</div>
                <div className = {styles.functions}>
                    <div className ={styles.buttons}>박스 추가</div>
                    <div className = {styles.buttons}>박스 색상</div>
                </div>
            </div>
        );
    }
}

export default EditTextBox;