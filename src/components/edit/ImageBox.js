import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { get_image_url, get_background_color, set_edit_status } from '../../actions/edit';
import TextBox from './TextBox';

class ImageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBoxClicked : 0
        }

    }
    render() {
        var color = this.props.color
        return(
            // <div className = {styles.imageBox} style = {{background: color}} onClick = {this.props.isBackEditDown(0)}>
            <div className = {styles.imageBox} style = {{background: color}} >
                <TextBox/>
                <img src = {this.props.image_url}/>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        image_url: state.edit.editImage,
        color : state.edit.currentColor,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isBackEditDown : (value) => {
            dispatch(set_edit_status(value))
        }
    }
}

ImageBox = connect(mapStateToProps, mapDispatchToProps)(ImageBox);

export default ImageBox;
