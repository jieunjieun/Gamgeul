import React from 'react';
import EditBox from '../components/edit/EditBox';

class Edit extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
            <EditBox/>
            </div>
        );
    }
}

export default Edit;