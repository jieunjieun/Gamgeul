import React from 'react';
import Basic from '../components/main-start/Basic';
import EditBox from '../components/edit/EditBox';

class Start extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            // isToggle: 0
        }
    }
    render () {
        return (
            <div>
                <Basic/>
                <EditBox/>
            </div>
        );
    }
}


export default Start;