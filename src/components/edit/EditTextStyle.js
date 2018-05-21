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
            lineSpacing: '',
            fontColor: '',
            textAlign : ''
        }
    }

    componentDidUpdate(nextProps, nextState) {
        this.props.changeStyle(this.state.fontStyle, this.state.fontSize, this.state.fontWeight, this.state.wordSpacing, this.state.lineSpacing, this.state.fontColor, this.state.textAlign)
    }

    render() {
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>텍스트 스타일</div>
                <div className = {styles.functions}>
                    <div className = {styles.styleTitle}>폰트</div>
                    <select className = {styles.fontSize} onChange = {(e) => this.fontStyle(e)}>
                        <option>나눔고딕</option>
                        <option>나눔명조</option>
                        <option>나눔고딕 코딩</option>
                        <option>나눔 손글씨 붓</option>
                        <option>나눔 손글씨 펜</option>
                        <option>제주 고딕</option>
                        <option>제주 명조</option>
                        <option>한나체</option>
                    </select>

                    <div className = {styles.styleTitle}>사이즈</div>
                    <select className = {styles.fontSize} onChange = {(e) =>  this.fontSize(e)}>
                        {
                            Array(50).fill(1).map((x, i) =>
                            <option key = {i} >{i+1}pt</option>
                            )
                        }
                    </select>
                    <div className = {styles.styleTitle}>굵기</div>
                    
                    <select className = {styles.fontWeight} onChange = {(e) => this.fontWeight(e)}>
                        {
                            Array(9).fill(1).map((x, i) => 
                            <option key = {i}>{i+1}00</option>    
                        )
                        }
                    </select>
                    <div className = {styles.styleTitle}>색상</div>

                    <select className = {styles.fontColor} onChange = {(e) => this.fontColor(e)}>
                        <option>black</option>
                        <option>white</option>
                    </select>
                    <div className = {styles.logowrap}>
                        <select className = {styles.between} onChange = {(e) => this.wordSpacing(e)}>
                          {
                              Array(10).fill(1).map((x, i) => 
                              <option key = {i}> {i+1}px</option>
                            )
                          }  
                        </select>   
                    </div>
                    <div className = {styles.logowrap}>
                    <select className = {styles.lineHeight} onChange = {(e) => this.lineSpacing(e)}>
                        {
                            Array(31).fill(1).map((x, i) => 
                            <option key = {i}> {i+10}px</option>
                        )
                        }
                    </select>
                    <div className = {styles.styleTitle}>위치</div>
                    <select className = {styles.textalign} onChange = {(e) => this.textAlign(e)}>
                        <option>left</option>
                        <option>center</option>
                        <option>right</option>
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

    fontColor(e) {
        this.setState({
            fontColor : e.target.value
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

    textAlign(e) {
        this.setState({
            textAlign : e.target.value
        })
    }

    
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeStyle: (style, size, weight, word, line, color, align) => {
            dispatch(set_box_style(style, size, weight, word, line, color, align))
        }
    }
}

EditTextStyle = connect(undefined, mapDispatchToProps)(EditTextStyle)
export default EditTextStyle;