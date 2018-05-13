import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { get_gamgeul_download } from '../../actions/edit';

class Submit extends React.Component {
    render() {
        return(
            <div className = {styles.submit} onClick = { this.props.ondownload }>
                등록하기
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        ondownload : () => {
            dispatch(get_gamgeul_download());
        }
    }
}

Submit = connect(undefined, mapDispatchToProps)(Submit);

export default Submit;