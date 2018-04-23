import React from 'react';
import styles from './styles.scss';
import ImageBox from './ImageBox';
import PostInfo from './PostInfo';
import DeleteButton from '../assets/DeleteButton';
import { connect } from 'react-redux';
import { toggle_view_modal } from '../../actions/animation'


//흰 박스 하나
class ViewBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.viewbox}>
                <DeleteButton onClick = {this.props.modalClose}/>
                <div className = {styles.viewboxContainer}>
                    <ImageBox />
                    <PostInfo />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose : () => {
            dispatch(toggle_view_modal())
        }
    }
}


ViewBox = connect(undefined, mapDispatchToProps)(ViewBox);

export default ViewBox