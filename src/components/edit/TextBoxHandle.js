import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { set_box_state, set_handle_state } from '../../actions/edit';

class TextBoxHandle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleisDown : true
        }
    }
    render() {
        return (
            <div className = {styles.boxHandle} id = "boxHandle" onClick = {this.resizeBox}>

            </div>
        )
        const box = document.getElementById('boxHandle');
        box.addEventListener('mousedown', initiallize, false);

        function initiallize(e) {
            this.props.handleisDown(true)
            box.addEventListener('mousemove', startResize, false);
            box.addEventListener('mouseup', stopResize, false);
        }
        function startResize(e) {
            this.props.boxisDown(false)
            
        }
        function stopResize(e) {
            box.removeEventListener('mousemove', startResize, false);
            box.removeEventListener('mouseup', stopResize, false);
            this.props.handleisDown(false);
            this.props.boxisDown(true);

        }
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleisDown : (status) => {
            status ? dispatch(set_box_state(true)) : dispatch(set_box_state(false))
        },
        boxisDown: (status) => {
            status ? dispatch(set_handle_state(true)) : dispatch(set_handle_state(false))
        }
    }
}


TextBoxHandle = connect(mapStateToProps, mapDispatchToProps)(TextBoxHandle)
export default TextBoxHandle