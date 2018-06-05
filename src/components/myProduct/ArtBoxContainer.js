import React from 'react';
import styles from './styles.scss';
import ArtBoxHeader from './ArtBoxHeader';
import ArtBox from './ArtBox';
import Post from '../main-body/Post';

class ArtBoxContainer extends React.Component {
  render(){
    return(
      <div className = {styles.artboxContainer}>
        <ArtBoxHeader />
        <Post />
      </div>
    )
  }
}

export default ArtBoxContainer;