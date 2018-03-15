import React from 'react';
import styles from './style.css'
import EditBox from '../edit/EditBox';
import { toggle_new_post } from '../../actions/main';
import { connect } from 'react-redux';
import tapeImg1 from '../../../assets/tape1.png';
import tapeImg2 from '../../../assets/tape2.png';

var tape1 = {
    width: "200px",
    height : "70px",
    border: "1px solid black",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
}

class Functions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = {styles.func}>
                <div className = {styles.create} style = { tape1 } onClick = { this.props.toggle }>
                    감글 생성 하기
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