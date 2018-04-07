import React from 'react';
import styles from './styles.css';
import LeftBox from './LeftBox';
import RightBox from './RightBox';
import { connect } from 'react-redux';
import { toggle_modal } from '../../actions/animation'

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
        isModalShow : state.animation.isToggle
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalToggle : () => {
            dispatch(toggle_modal())
        }
    }
} 


EditBox = connect(mapStateToProps, mapDispatchToProps)(EditBox);

export default EditBox;