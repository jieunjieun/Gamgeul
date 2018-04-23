import React from 'react';
import styles from './styles.scss';

class Creator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.creator}>
                <div className = {styles.artist}><a>아바타</a>님이 제작하셨습니다.</div>
                <div className = {styles.like}><a>홍길동</a>,&nbsp;<a>미미</a>님 외 &nbsp;<a>3</a>명이 이 글을 좋아합니다. </div>
                <div className = {styles.editor}><a>홍길동</a>,&nbsp;<a>미미</a>님 외 &nbsp;<a>3</a>명이 재편집했습니다. </div>
            </div>
        )
    }
}

export default Creator;