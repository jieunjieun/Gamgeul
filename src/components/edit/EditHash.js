import React from 'react';
import styles from './styles.scss'

class EditHash extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>해시태그</div>
                <div className = {styles.functions}>
                    <div className = {styles.inputHash}><input type = "text" placeholder = "해시태그를 입력하세요"/></div>
                    <div className = {styles.hashtag}># 감성</div>
                </div>
            </div>
        );
    }
}

export default EditHash;