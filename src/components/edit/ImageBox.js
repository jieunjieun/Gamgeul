import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { get_image_url, get_background_color, set_edit_status, get_gamgeul_download, GET_GAMGEUL_DOWNLOAD } from '../../actions/edit';
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
        this.props.isDownloadOn == 'click' ? this.htmlToimage() : 0
        console.log(this.props.isDownloadOn)
        return(
            <div id = "imageBox" className = {styles.imageBox} style = {{background: this.props.color}}>
                <TextBox/>
                <img src = {this.props.image_url} alt = ""/>
                <a id = "download"></a>
            </div>

        );
    }

    htmlToimage() {
        html2canvas(document.querySelector('#imageBox')).then(canvas => {
            const item = document. getElementById('download');
            item.setAttribute('href', canvas.toDataURL('image/png'));
            item.setAttribute('download', 'Gamgeul.png');
            item.click();
        })
    }
}



const mapStateToProps = (state) => {
    return {
        image_url: state.edit.editImage,
        color : state.edit.currentColor,
        isDownloadOn : state.edit.isDownloadOn
    }
}

ImageBox = connect(mapStateToProps)(ImageBox);

export default ImageBox;
