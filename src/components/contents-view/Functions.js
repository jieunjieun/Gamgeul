import React from 'react';
import styles from './styles.scss';

class Functions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = { styles.functions }>
                <div className = { styles.editwithImage }>이 배경으로 편집하기</div>
                <div className = { styles.downloadImage}>감글 다운로드</div>
            </div>
        )
    }
}
export default Functions