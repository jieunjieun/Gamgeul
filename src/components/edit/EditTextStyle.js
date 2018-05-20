import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { set_box_style }  from '../../actions/edit'

class EditTextStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontStyle: '',
            fontSize: '',
            fontWeight: '',
            wordSpacing: '',
            lineSpacing: ''
        }
    }

    componentDidUpdate(nextProps, nextState) {
        this.props.changeStyle(this.state.fontStyle, this.state.fontSize, this.state.fontWeight, this.state.wordSpacing, this.state.lineSpacing)
    }

    render() {
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>텍스트 스타일</div>
                <div className = {styles.functions}>
                    <select className = {styles.fontSize} onChange = {(e) => this.fontStyle(e)}>
                        <option>Adobe 명조 STD M</option>
                    </select>
                    <select className = {styles.fontSize} onChange = {(e) =>  this.fontSize(e)}>
                        <option>9pt</option>
                        <option>10pt</option>
                        <option>11pt</option>
                    </select>
                    <select className = {styles.fontWeight} onChange = {(e) => this.fontWeight(e)}>
                        <option>light</option>
                        <option>bold</option>
                    </select>
                    <div className = {styles.logowrap}>
                        <select className = {styles.between} onChange = {(e) => this.wordSpacing(e)}>
                            <option>1pt</option>
                            <option>2pt</option>
                        </select>   
                    </div>
                    <div className = {styles.logowrap}>
                    <select className = {styles.lineHeight} onChange = {(e) => this.lineSpacing(e)}>
                        <option>1pt</option>
                        <option>2pt</option>
                    </select>
                    </div>
                </div>
            </div>
        );
    }

    fontStyle(e) {
        this.setState({
            fontStyle : e.target.value
        })
    }

    fontSize(e) {
        this.setState({
            fontSize: e.target.value
        })
    }

    fontWeight(e) {
        this.setState({
            fontWeight : e.target.value
        })
    }

    wordSpacing(e) {
        this.setState({
            wordSpacing : e.target.value
        })
    }

    lineSpacing(e) {
        this.setState({
            lineSpacing : e.target.value
        })
    }

    
}
const mapStateToProps = (state) => {
    return {
        fontStyle: state.edit.font,
        fontWeight : state.edit.weight,
        fontSize : state.edit.size,
        wordSpacing : state.edit.wordSpacing,
        lineSpacing : state.edit.lineSpacing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStyle: (style, size, weight, word, line) => {
            dispatch(set_box_style(style, size, weight, word, line))
        }
    }
}

EditTextStyle = connect(mapStateToProps, mapDispatchToProps)(EditTextStyle)
export default EditTextStyle;