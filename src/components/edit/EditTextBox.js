import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { add_new_textbox } from '../../actions/edit';

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
                    <div className = {styles.buttons}>박스 색상</div>
                    <div>id is { this.props.id }</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.edit.boxid,
        text: state.edit.text
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