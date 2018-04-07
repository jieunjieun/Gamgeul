import React from 'react';
import styles from './styles.scss'

class EditBackground extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>배경</div>
                <div className = {styles.functions}>
                    <div className ={styles.buttons}>이미지 불러오기</div>
                    <div className = {styles.buttons}>단색 배경 설정</div>
                </div>
            </div>
        );
    }
}

export default EditBackground;