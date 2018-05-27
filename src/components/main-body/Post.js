import React from 'react';
import styles from './style.scss';
import { connect } from 'react-redux';
import PostList from './PostList';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {number: '', image: require('../../../assets/testImage1.png')},
                {number: '', image : require('../../../assets/testImage2.png')},
                {number: '', image : require('../../../assets/testImage3.png')},
                {number: ''},
                {number: ''},
                {number: ''},
                {number: ''},
                {number: ''},
            ]
        }
    }
    render() {
        return(
                <div className = {styles.postList}>
                    {this.state.list.map((list, i) => {
                        return(
                            <PostList number = {list.number} key={i} image = {list.image} onClick = {this.helo} />
                        )
                    })}
                </div>
        );
    }
}


export default Post;