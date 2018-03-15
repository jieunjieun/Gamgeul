import React from 'react';
import styles from './style.css';

class Title extends React.Component {
    render() {
        return(
            <div className = {styles.title}>
                <div>뜨고있는 감글</div>
            </div>
        );
    }
}

export default Title;