import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { add_new_textbox,  get_current_box } from '../../actions/edit';

class EditTextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>텍스트박스</div>
                <div className = {styles.functions}>
                    <div className ={styles.buttons} onClick = { this.props.addBox }>박스 추가</div>
                    <div className = {styles.trash}></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        CurrentBox: state.edit.CurrentBox
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBox : () => {
            dispatch(add_new_textbox()); 
        }
    }
}



EditTextBox = connect(mapStateToProps, mapDispatchToProps)(EditTextBox);
export default EditTextBox;