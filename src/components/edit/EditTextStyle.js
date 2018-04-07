import React from 'react';
import styles from './styles.scss';

class EditTextStyle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>텍스트 스타일</div>
                <div className = {styles.functions}>
                    <select className = {styles.fontSelect}>
                        <option>Adobe 명조 STD M</option>
                    </select>
                    <select className = {styles.fontSize}>
                        <option>9pt</option>
                        <option>10</option>
                        <option>11</option>
                    </select>
                    <select className = {styles.fontWeight}>
                        <option>light</option>
                        <option>bold</option>
                    </select>
                    <div className = {styles.logowrap}>
                        <select className = {styles.between}>
                            <option>1pt</option>
                            <option>2pt</option>
                        </select>   
                    </div>
                    <div className = {styles.logowrap}>
                    <select className = {styles.lineHeight}>
                        <option>1pt</option>
                        <option>2pt</option>
                    </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditTextStyle;