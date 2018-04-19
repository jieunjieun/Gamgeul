import React from 'react';
import styles from './styles.scss';
import LeftBox from './LeftBox';
import RightBox from './RightBox';
import { connect } from 'react-redux';
import { toggle_edit_modal } from '../../actions/animation';
import { get_background_color, get_image_url } from '../../actions/edit';

class EditBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.basicBox} style = {{'display' : this.props.isModalShow ? 'flex' : 'none'}} >
                <div className = {styles.backgroundBox} onClick = { this.props.modalToggle }></div>
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


const mapStateToProps = (state) => {
    return {
        isModalShow : state.animation.isEditModalToggle
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalToggle : () => {
            dispatch(toggle_edit_modal())
            dispatch(get_background_color(''))
            dispatch(get_image_url(''))
        }
    }
} 


EditBox = connect(mapStateToProps, mapDispatchToProps)(EditBox);

export default EditBox;