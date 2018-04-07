import React from 'react';
import styles from './style.css'
import EditBox from '../edit/EditBox';
import tapeImg1 from '../../../assets/tape1.png';
import tapeImg2 from '../../../assets/tape2.png';
import { connect } from 'react-redux';
import { toggle_modal } from '../../actions/animation';

class Functions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var tape1 = {
            backgroundImage: `url(${ tapeImg1 })`
        }
        var tape2 = {
            backgroundImage: `url(${ tapeImg2 })`
        }
        return (
            <div className = {styles.func}>
                <div style = { tape1 } className = {styles.create} onClick = {this.props.modalToggle}>
                    감글 생성 하기
                </div>
                <div style = { tape2 } className = {styles.list} >
                    내 감글 목록
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalToggle : () => {
            dispatch(toggle_modal())
        }
    }
} 


Functions = connect(undefined, mapDispatchToProps)(Functions);

export default Functions;