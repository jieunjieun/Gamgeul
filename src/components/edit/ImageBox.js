import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { get_image_url, get_background_color } from '../../actions/edit';
import TextBox from './TextBox';

class ImageBox extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        var color = this.props.color
        return(
            <div className = {styles.imageBox} style = {{background: color}}>
            <TextBox/>
                <img src = {this.props.image_url}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        image_url: state.edit.editImage,
        color : state.edit.currentColor
    }
}

ImageBox = connect(mapStateToProps, undefined)(ImageBox);

export default ImageBox;
