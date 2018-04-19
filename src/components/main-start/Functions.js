import React from 'react';
import styles from './style.scss'
import EditBox from '../edit/EditBox';
import tapeImg1 from '../../../assets/tape1.png';
import tapeImg2 from '../../../assets/tape2.png';
import { connect } from 'react-redux';
import { toggle_edit_modal } from '../../actions/animation';

class Functions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = {styles.func}>
                <div className = {styles.create} onClick = {this.props.modalToggle}>
                    감글 생성 하기
                </div>
                <div className = {styles.list} >
                    내 감글 목록
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalToggle : () => {
            dispatch(toggle_edit_modal())
        }
    }
} 


Functions = connect(undefined, mapDispatchToProps)(Functions);

export default Functions;