import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}