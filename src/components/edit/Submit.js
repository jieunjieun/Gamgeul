import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { get_gamgeul_download, set_gamgeul_status } from '../../actions/edit';

class Submit extends React.Component {
    render() {
        console.log(this.props.test)
        return(
            <div className = {styles.submit} onClick = { (e) => this.props.ondownload(e) }>
                등록하기
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        ondownload : (value) => {
            dispatch(set_gamgeul_status(value.type));
        }

    }
}

Submit = connect(undefined, mapDispatchToProps)(Submit);

export default Submit;