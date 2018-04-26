import React from 'react';
import styles from './styles.scss'

class EditHash extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tags: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
    }
    render() {
        console.log(this.state.tags.length);
        return(
            <div className = {styles.functionBox}>
                <div className = {styles.functionTitle}>해시태그</div>
                <div className = {styles.functions}>
                    <div className = {styles.inputHash}><input type = "text" placeholder = "해시태그를 입력하세요" onChange = {this.handleChange} onKeyPress = {this.handleKeyup}/></div>
                    <div className = {styles.hashtagWrap}>
                        {
                            this.state.tags.map((tag, id) => {
                                return(
                                    <div className = {styles.hashtag} key = { id } onClick = {() => {this.deleteHashtag(id)}}># {tag}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    handleChange(e){
        this.setState({ text : e.target.value});
    }

    handleKeyup(e){
        var text = this.state.text
        if(e.key == 'Enter') {
            if(this.state.tags.length < 5) {
                this.setState((prevState) => ({
                    tags: prevState.tags.concat(text)
                }))
            }
            else {
                window.alert('해쉬태그는 5개 이상 설정할 수 없습니다.')
            }
        }
    }

    deleteHashtag (id) {
        console.log("function");
        console.log(id);
    }

 }

export default EditHash;