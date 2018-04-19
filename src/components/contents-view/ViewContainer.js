import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import ViewBox from './ViewBox';
import { toggle_view_modal } from '../../actions/animation'

class ViewContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        console.log(this.props.isViewShow);
        return (
            <div className = {styles.basicBox} style = {{'display' : this.props.isViewShow ? 'flex' : 'none'}}>
            <div className = {styles.backBox} onClick = {this.props.modalClose}></div>
                <ViewBox/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isViewShow : state.animation.isViewModalToggle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose : () => {
            dispatch(toggle_view_modal())
        }
    }
}

ViewContainer = connect(mapStateToProps, mapDispatchToProps)(ViewContainer)

export default ViewContainer