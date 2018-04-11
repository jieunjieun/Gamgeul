import React from 'react';
import styles from './styles.scss'
import { get_image_url } from '../../actions/edit';
import { connect } from 'react-redux';

class EditBackground extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>배경</div>
                <div className = {styles.functions}>
                    <div className ={styles.buttons}><input type = "file" onChange = { (e) => this.getImage(e)} accept= "image/*" />이미지 불러오기</div>
                    <div className = {styles.buttons}>단색 배경 설정</div>
                </div>
            </div>
        );
    }

    getImage(e) {
        e.preventDefault();

        var reader = new FileReader();
        var file = e.target.files[0];

        reader.onloadend = () => {
            console.log(reader.result);            
            this.props.imageChange(reader.result)
        }
        reader.readAsDataURL(file);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        imageChange: (value) => {
                console.log(value);
                dispatch(get_image_url(value));
            }
        }
    }

EditBackground = connect(undefined, mapDispatchToProps)(EditBackground);

export default EditBackground;