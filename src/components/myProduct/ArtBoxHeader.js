import React from 'react';
import styles from './styles.scss';

class ArtBoxHeader extends React.Component {
  render(){
    return(
      <div className = {styles.artboxHeader}>
        내가 제작한 감글
      </div>
    )
  }
}

export default ArtBoxHeader;