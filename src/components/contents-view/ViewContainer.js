import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import ViewBox from './ViewBox';
import { toggle_view_modal } from '../../actions/animation'
import DeleteButton from '../assets/DeleteButton';

//배경 및 viewbox parent
class ViewContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        console.log(this.props.isViewShow);
        return (
            <div className = {styles.basicBox} style = {{'display' : this.props.isViewShow ? 'flex' : 'none'}}>
            <div className = {styles.backBox} onClick = { this.props.modalClose }>helo</div>
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
            console.log('hello')
            dispatch(toggle_view_modal())
        }
    }
}

ViewContainer = connect(mapStateToProps, mapDispatchToProps)(ViewContainer)

export default ViewContainer