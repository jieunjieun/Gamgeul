import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { get_image_url } from '../../actions/edit';

class ImageBox extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className = {styles.imageBox}>
                <img src = {this.props.image_url}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        image_url: state.edit.editImage
    }
}

ImageBox = connect(mapStateToProps, undefined)(ImageBox);

export default ImageBox;
