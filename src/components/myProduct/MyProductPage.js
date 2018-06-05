import React from 'react';
import Header from '../main-start/Header';
import styles from './styles.scss';
import ArtBoxContainer from './ArtBoxContainer';

class MyProductPage extends React.Component {
  render(){
    return(
      <div className = {styles.productPage}>
          <Header />
          <ArtBoxContainer />
      </div>
    )
  }
}

export default MyProductPage;