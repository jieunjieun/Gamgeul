import React from 'react';
import styles from './style.css'
import EditBox from '../edit/EditBox';
import { toggle_new_post } from '../../actions/main';
import { connect } from 'react-redux';
import tapeImg1 from '../../../assets/tape1.png';
import tapeImg2 from '../../../assets/tape2.png';


class Functions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 1,
            currentStatus: '',
        }
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
                <div style = { tape1 } className = {styles.create} onClick = { this.props.toggle }>
                    감글 생성 하기
                </div>
                <h1>{ this.props.value }</h1>
                <div style = { tape2 } className = {styles.list}>
                    내 감글 목록
                    
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => dispatch(toggle_new_post('hello'))
    }
}

// const mapStateToProps = (state) => {
//     return {
//         value: state.index.status
//     }
// }

Functions = connect(undefined, mapDispatchToProps)(Functions);

export default Functions;