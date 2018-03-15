import React from 'react';
import styles from './style.css'
import EditBox from '../edit/EditBox';
import { toggle_new_post } from '../../actions/main';
import { connect } from 'react-redux';

class Functions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = {styles.func}>
                <div className = {styles.create} onClick = { this.props.toggle }>
                    감글 생성하기
                </div>
                <div className = {styles.list}>
                    내 감글 목록
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        status : state.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => {
            console.log('hello');
            dispatch(toggle_new_post());
        }
    }
}

Function = connect(mapStateToProps, mapDispatchToProps)(Functions);


export default Functions;