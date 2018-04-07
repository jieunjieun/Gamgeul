import React from 'react';
import styles from './styles.scss';
import ImageBox from './ImageBox';

class LeftBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
     return(
         <div className = {styles.leftBox}>
            <ImageBox/>
         </div>
     );
    }
}

export default LeftBox;