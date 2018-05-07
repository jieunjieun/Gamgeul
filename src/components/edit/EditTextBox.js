import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { add_new_textbox, add_test_new_textbox } from '../../actions/edit';

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
        id: state.edit.numberOfBox,
        text: state.edit.text,
        box : state.edit.boxCreate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBox : () => {
            dispatch(add_new_textbox()); 
            // dispatch(add_test_new_textbox(1));
        }
    }
}



EditTextBox = connect(mapStateToProps, mapDispatchToProps)(EditTextBox);
export default EditTextBox;