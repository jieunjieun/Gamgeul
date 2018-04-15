import React from 'react';
import styles from './styles.scss'
import { add_new_textbox } from '../../actions/edit';
import { connect } from 'react-redux';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            box: []
        }
    }

    componentWillReceiveProps() {
        this.state.box.push({id: this.props.boxid+1, name: 'hello'})
    }
    render() {
        return(
            <div className = {styles.textbox}>
            {
                this.state.box.map((item) => {
                    this.addDyna(item.id);
                    return(
                    <div className = {styles.box} key = { item.id } id = { item.id } onClick = {() => this.addDyna(item.id)}>
                        myname is : { item.id }
                    </div>
                    )
                    
                })
            }
            </div>
        )
    }
    addDyna(value) {
       
        var item = document.getElementById(value);
        var offset = [0,0];
        var isDown = false;
        var mousePosition;
        if(item) {

            this.addMD = function () {
                console.log('hello')
            }
            item.addEventListener('mousedown', function(e) {
                isDown = true;
                offset = [
                    item.offsetLeft - e.clientX,
                    item.offsetTop - e.clientY
                ];
            }, true);
            
            item.addEventListener('mouseup', function() {
                isDown = false;
            }, true);
            document.addEventListener('mousemove', function (e) {
                e.preventDefault();
                if(isDown) {
                    mousePosition = {
                        x: event.clientX,
                        y : event.clientY
                    };
                    item.style.left = (mousePosition.x + offset[0]) + 'px';
                    item.style.top = (mousePosition.y + offset[1]) + 'px';
                }
            }, true)

        }
    }
}

const mapStateToProps = (state) => {
    return {
        boxid: state.edit.boxid,
        name: state.edit.name
    }
}

TextBox = connect(mapStateToProps, undefined)(TextBox);

export default TextBox;