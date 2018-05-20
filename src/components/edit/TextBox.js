import React from 'react';
import styles from './styles.scss'
import TextBoxHandle from './TextBoxHandle';
import { add_new_textbox, set_edit_status, get_current_box } from '../../actions/edit';
import { connect } from 'react-redux';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            box: [],
            currentBox : ''
        }
        this.addDyna = this.addDyna.bind(this);
        this.backclick = this.backclick.bind(this);
    }

    
    componentWillReceiveProps(nextprops) {
        const name = Object.keys(JSON.parse(JSON.stringify(nextprops)));
        const value = JSON.parse(JSON.stringify(nextprops))
        if(name) {
            this.state.box.push({id : this.props.numberOfBox + 1, name: 'hello'})
        }
    }

    render() {
        return(
            <div className = {styles.textbox} onClick = {this.backclick}>
            {
                this.state.box.map((currentBox) => {
                    return(
                        <div className = {styles.box} key = { currentBox.id } id = { currentBox.id } onClick = {(e) => this.setborder(e, currentBox.id)}>
                        <textarea onKeyDown = {() => this.resize(this, currentBox.id)} onKeyUp = {() => this.resize(this, currentBox.id)}id = {'text'+currentBox.id} placeholder="텍스트를 입력해주세요" onKeyDown = {(e) => this.setborder(e, currentBox.id)}></textarea>
                        {/* <div className = {styles.boxHandle} id = {'handle' + currentBox.id}> </div> */}
                    </div>
                    )
                })
            }
            </div>
        )
    }

    backclick() {
        const id = this.state.currentBox;
        var box = document.getElementById(id);
        
        if(id) {
            box.style.border = "none";
        }

    }

    componentDidUpdate() {
        const id = this.props.numberOfBox;
        this.addDyna(id);
        // this.handleDyna(id)
    }

    setborder(e,id) {
        this.setState({
            currentBox : id
        }) 
        this.props.setCurrentBox(id);
        var currentBox = document.getElementById(id);


        if(currentBox) {
            currentBox.style.border = "1px dashed #C4C4C4";
        }
        else {
        }
    }  

    resize(obj, id) {
        var currentBox = document.getElementById(id);
        var textarea = document.getElementById('text'+id);
        if(textarea.scrollHeight > 104) {
            textarea.style.height = "1px";
            textarea.style.height = (textarea.scrollHeight - 4)+'px';
            currentBox.style.height = (textarea.scrollHeight - 4) + 'px';
        }
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
            currentBox.addEventListener('mousedown', function(e) {     // 현재 생성된 박스를 클릭면

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
                // e.preventDefault();   //이벤트 전파 방지
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
        }
    }

    handleDyna(value) {
        var currentBox = document.getElementById(value);
        var handleBox = document.getElementById('handle' + value);   //크기 조정 핸들
        const elePosition = currentBox.getBoundingClientRect();    // 현재 생성된 박스의 크기

        handleBox.addEventListener('mousedown', initiallize, false);

        function initiallize(e) {
            // handleisDown = true;
            handleBox.addEventListener('mousemove', startResize, false);
            handleBox.addEventListener('mouseup', stopResize, false);
        }

        function startResize(e) {
            // isDown = false;
            currentBox.style.width = (elePosition.width + e.offsetX) + 'px';
            currentBox.style.height = (elePosition.height + e.offsetY) + 'px';
        }

        function stopResize(e) {
            handleBox.removeEventListener('mousemove', startResize, false);
            handleBox.removeEventListener('mouseup', stopResize, false);
            // handleisDown = false;
            // isDown = true;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        numberOfBox: state.edit.numberOfBox,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentBox: (value) => {
            dispatch(get_current_box(value))
        }
    }
}

TextBox = connect(mapStateToProps, mapDispatchToProps)(TextBox);

export default TextBox;
