import React from 'react';
import styles from './styles.scss'
import { add_new_textbox } from '../../actions/edit';
import { connect } from 'react-redux';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            box: [],
        }
    }

    componentWillReceiveProps() {
        this.state.box.push({id: this.props.numberOfBox+1, name: 'hello'})
    }
    render() {
        return(
            <div className = {styles.textbox}>
            {
                this.state.box.map((currentBox) => {
                    this.addDyna(currentBox.id);
                    return(
                    <div className = {styles.box} key = { currentBox.id } id = { currentBox.id }  onClick = {() => {this.addDyna(currentBox.id)}} >
                        myname is : { currentBox.id }
                        <div className = {styles.boxHandle} id = { 'handle' + currentBox.id }></div>
                    </div>
                    )
                })
            }
            </div>
        )
        
    }
    addDyna(value) {

        var currentBox = document.getElementById(value);   //박스
        var handleBox = document.getElementById('handle' + value);   //크기 조정 핸들
        var offset = [0,0];  //박스 초기 위치
        var isDown = false; // 눌렸나 안눌렸나 확인
        var handleisDown = false;
        var mousePosition; //마우스 위치

        if(currentBox) {    //현재 생성된 박스가 있으면
            const elePosition = currentBox.getBoundingClientRect();    // 현재 생성된 박스의 크기
            const eleLimit = [430 - elePosition.width + 2, 430 - elePosition.height + 2] // 현재 생성된 박스에 크기에 따라 textbox 사이즈 조정 수식

            currentBox.addEventListener('mousedown', function(e) {     // 현재 생성된 박스를 클릭하면
                isDown = true;       //눌린것 확인
                offset = [            // 현재 생성된 박스의 위치 지정
                    currentBox.offsetLeft - e.clientX,
                    currentBox.offsetTop - e.clientY
                ];
            }, true);

            currentBox.addEventListener('mouseup', function() {    //마우스 때면
                isDown = false;     //안눌린것 확인
            }, true);

            document.addEventListener('mousemove', function (e) {     //마우스를 이동하면
                e.preventDefault();   //이벤트 전파 방지
                if(isDown) {           //눌린게 맞으면
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
                            isDown = false;
                        }, true);
                }
            }, true)
            handleBox.addEventListener('mousedown', function() {
                handleisDown = true;
            }, true)
            handleBox.addEventListener('mousemove', function (e) {
                if(handleisDown) {
                    isDown = false;
                    currentBox.style.width = (elePosition.width + e.offsetX) + 'px';
                    currentBox.style.height = (elePosition.height + e.offsetX) + 'px';
                }
            }, true)

            handleBox.addEventListener('mouseup', function () {
                currentBox.addEventListener('mousedown', function () {
                    isDown = true
                })
                handleisDown = false;
            }, true);
            
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