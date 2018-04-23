import React from 'react';
import styles from './styles.scss';

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.deleteButton} onClick = {this.props.onClick}></div>
        );
    }
}

export default DeleteButton;