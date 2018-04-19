import React from 'react';
import styles from './styles.scss';

class ViewBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.viewbox}></div>
        )
    }
}

export default ViewBox