import React from 'react';
import Title from '../main-body/Title';
import Post from '../main-body/Post';
import styles from '../main-body/style.scss';

class MainBody extends React.Component {
    render() {
        return(
            <div className = {styles.mainbody}>
                <Title></Title>
                <Post></Post>
            </div>
        );
    }
}

export default MainBody;