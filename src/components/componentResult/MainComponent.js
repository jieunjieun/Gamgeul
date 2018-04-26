import React from 'react';
import Start from './Start';
import MainBody from './MainBody';
import { Link } from 'react-router';

class Main extends React.Component {
    render () {
        return (
            <div>
                <Start></Start>
                <MainBody></MainBody>
            </div>
        );
    }
}

export default Main;