import React from 'react';
import styles from './style.scss';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {menu: '님'},
                {menu: '내 정보'},
                {menu: '로그아웃'}
            ]
        }
    }
    render() {
        return(
            <div className = {styles.infoBox}>
                {this.state.list.map((list, i) => {
                    return(
                        <div key={i}>
                            <InfoList menu = {list.menu}></InfoList>
                        </div>
                    )
                })}
            </div>
        ); 
    }
}

class InfoList extends React.Component {
    render() {
        return(
                <div className = {styles.info}>
                    {this.props.menu}
                </div>
        );
    }
}

export default Info;