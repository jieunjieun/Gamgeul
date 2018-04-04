import React from 'react';
import styles from './styles.css';
import LeftBox from './LeftBox';
import RightBox from './RightBox';


class EditBox extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <div className = {styles.backBox}>
                <div className = {styles.editBox}>
                    <div className = {styles.wrapBox}>
                        <LeftBox/>
                        <RightBox/>
                   </div>
                </div>
            </div>
        );
    }
}

export default EditBox;