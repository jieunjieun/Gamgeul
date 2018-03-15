import React from 'react';
import styles from './style.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {number: ''},
                {number: ''},
                {number: ''},
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
                            <PostList number = {list.number} key={i}></PostList>
                        )
                    })}
                </div>
        );
    }
}

class PostList extends React.Component {
    render() {
        return(
            <div className = {styles.post}>
                {this.props.number}
            </div>
        );
    }
}

export default Post;