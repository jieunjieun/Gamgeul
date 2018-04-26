import React from 'react';
import Basic from '../main-start/Basic';
import EditBox from '../edit/EditBox';
import ViewContainer from '../contents-view/ViewContainer'

class Start extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            // isEditModalToggle: 0
        }
    }
    render () {
        return (
            <div>
                <Basic/>
                <EditBox/>
                <ViewContainer />
            </div>
        );
    }
}


export default Start;