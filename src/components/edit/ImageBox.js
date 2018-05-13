import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { get_image_url, get_background_color, set_edit_status, get_gamgeul_download } from '../../actions/edit';
import TextBox from './TextBox';
import html2canvas from 'html2canvas';

class ImageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBoxClicked : 0,
        }
    }

    render() {
        this.props.isDownloadOn ? this.htmlToimage() : 0
        return(
            // <div className = {styles.imageBox} style = {{background: color}} onClick = {this.props.isBackEditDown(0)}>
            <div id = "imageBox" className = {styles.imageBox} style = {{background: this.props.color}}>
                <TextBox/>
                <img src = {this.props.image_url}/>
                <a id = "download"></a>
            </div>
        );
    }

    htmlToimage() {
        html2canvas(document.querySelector('#imageBox')).then(canvas => {
            console.log(canvas.toDataURL('image/png'));
            const item = document. getElementById('download');
            item.setAttribute('href', canvas.toDataURL('image/png'));
            item.setAttribute('download', 'TestFile.png');
            item.click();
        })
        // html2canvas(document.getElementById('imageBox'), {
        //     onrendered: function (canvas) {
        //         const item = document.getElementById('download');
        //         item.setAttribute('href', canvas.toDataURL('image/png'));
        //         item.setAttribute('download', 'TestFile.png');
        //         item.click();

        //     }
        // })
        
    }
}



const mapStateToProps = (state) => {
    return {
        image_url: state.edit.editImage,
        color : state.edit.currentColor,
        isDownloadOn : state.edit.isDownloadOn
    }
}

ImageBox = connect(mapStateToProps, undefined)(ImageBox);

export default ImageBox;
