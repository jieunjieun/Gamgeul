import React from 'react';
import Creator from './Creator';
import Functions from './Functions';
import styles from './styles.scss';

class PostInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.postinfo}>
                <Creator/>
                <Functions />
            </div>
        )
    }
}

export default PostInfo