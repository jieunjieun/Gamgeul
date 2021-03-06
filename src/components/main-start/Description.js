import React from 'react';
import styles from './style.scss';
import { connect } from 'react-redux';

class Description extends React.Component{
    render() {
        return(
            <div className = {styles.description}>
                다른 유저들과 사진을 공유하고, 그 위에 글귀를 넣어 자신만의 감성을 제작할 수 있는 서비스 입니다.
            </div>
        );
    }
}

export default Description;