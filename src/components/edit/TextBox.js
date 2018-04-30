import React from 'react';
import styles from './styles.scss'
import TextBoxHandle from './TextBoxHandle';
import { add_new_textbox } from '../../actions/edit';
import { connect } from 'react-redux';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            box: [],
            handleisDown : false,
            boxisDown : false
        }
        this.addDyna = this.addDyna.bind(this);
        this.handleDyna = this.handleDyna.bind(this);
    }

    componentWillReceiveProps() {
        if(this.props.numberOfBox >= 0) {
            this.state.box.push({id : this.props.numberOfBox + 1, name: 'hello'})
        }
    }
    render() {
        return(
            <div className = {styles.textbox}>
            {
                this.state.box.map((currentBox) => {
                    return(
                        <div className = {styles.box} key = { currentBox.id } id = { currentBox.id }  >
                        myname is : { currentBox.id }
                        <div className = { styles.boxHandle } id = {'handle' + currentBox.id} onClick = {this.resizeBox}> </div>
                    </div>
                    )
                })
            }
            </div>
        )
        
    }

    componentDidUpdate() {
        const id = this.props.numberOfBox;
        this.addDyna(id);
        this.handleDyna(id);
    }

    addDyna(value) {
        var currentBox = document.getElementById(value);   //박스
        var handleBox = document.getElementById('handle' + value);   //크기 조정 핸들
        var offset = [0,0];  //박스 초기 위치
        var mousePosition; //마우스 위치

        if(currentBox) {    //현재 생성된 박스가 있으면
            const elePosition = currentBox.getBoundingClientRect();    // 현재 생성된 박스의 크기
            const eleLimit = [430 - elePosition.width + 2, 430 - elePosition.height + 2] // 현재 생성된 박스에 크기에 따라 textbox 사이즈 조정 수식

            currentBox.addEventListener('mousedown', function(e) {     // 현재 생성된 박스를 클릭하면
                this.setState({
                    boxisDown : true
                })
                offset = [            // 현재 생성된 박스의 위치 지정
                    currentBox.offsetLeft - e.clientX,
                    currentBox.offsetTop - e.clientY
                ];
            }.bind(this), true);

            currentBox.addEventListener('mouseup', function() {    //마우스 때면
                this.setState({
                    boxisDown : false
                })
            }.bind(this), true);

            document.addEventListener('mousemove', function (e) {     //마우스를 이동하면
                // e.preventDefault();   //이벤트 전파 방지
                if(status) {           //눌린게 맞으면
                    mousePosition = {       
                        x: event.clientX,
                        y : event.clientY
                    };
                        currentBox.style.left = (mousePosition.x + offset[0]) + 'px';
                        currentBox.style.top = (mousePosition.y + offset[1]) + 'px';

                        const left = (mousePosition.x + offset[0]);
                        const top = (mousePosition.y + offset[1]);

                        top < 0 ? currentBox.style.top = 0 + 'px' : true
                        top > eleLimit[1] ? currentBox.style.top = eleLimit[1] + 'px' : true
                        left < 0 ? currentBox.style.left = 0 + 'px' : true
                        left > eleLimit[0] ? currentBox.style.left = eleLimit[1] + 'px' : true

                        document.addEventListener('mouseup', function () {
                            this.setState({
                                boxisDown : false
                            })
                        }.bind(this), true);
                }
            }, true)

            
            
        }
    }
    handleDyna(value) {
        
        var handleBox = document.getElementById('handle' + value);   //크기 조정 핸들

        handleBox.addEventListener('mousedown', initiallize, false);

        function initiallize(e) {
            this.setState({
                handleisDown : true
            })
            handleBox.addEventListener('mousemove', startResize, false);
            handleBox.addEventListener('mouseup', stopResize, false);
        }

        function startResize(e) {
            this.setState({
                boxisDown : false
            })
            currentBox.style.width = (elePosition.width + e.offsetX) + 'px';
            currentBox.style.height = (elePosition.height + e.offsetY) + 'px';
        }

        function stopResize(e) {
            handleBox.removeEventListener('mousemove', startResize, false);
            handleBox.removeEventListener('mouseup', stopResize, false);
            this.setState({
                handleisDown : false,
                boxisDown : true
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        numberOfBox: state.edit.numberOfBox,
        name: state.edit.name
    }
}

TextBox = connect(mapStateToProps, undefined)(TextBox);

export default TextBox;
