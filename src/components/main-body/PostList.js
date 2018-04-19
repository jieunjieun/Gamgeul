import React from 'react';
import { connect } from 'react-redux';
import styles from './style.scss';
import { toggle_view_modal } from '../../actions/animation'

class PostList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = {styles.post} onClick = {this.props.toggleModal}>
            {/* <img src = { backImage }/> */}
                status is : { this.props.status }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status : state.animation.isViewModalToggle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal : () => {
            dispatch(toggle_view_modal());
        }
    }
}

PostList = connect(mapStateToProps, mapDispatchToProps)(PostList);

export default PostList;