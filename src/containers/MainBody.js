import React from 'react';
import styles from '../components/main-body/style.css';
import Title from '../components/main-body/Title';
import Post from '../components/main-body/Post';

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