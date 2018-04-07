import React from 'react';
import styles from './styles.scss'
import EditBackground from './EditBackground';
import EditTextBox from './EditTextBox';
import EditTextStyle from './EditTextStyle';
import EditHash from './EditHash';

class RightBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.rightBox}>
                <EditBackground/>
                <EditTextBox/>
                <EditTextStyle/>
                <EditHash/>
            </div>
        );
    }
}

export default RightBox;