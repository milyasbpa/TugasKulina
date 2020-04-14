import React, { Component } from 'react';
import './App.css';
import './preset.css';
import Header from './components/Header';
import HeaderTanggal from './components/HeaderTanggal';
import HeaderButton from './components/HeaderButton';
import KotakMakanan from './components/KotakMakanan';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HeaderTanggal/>
        <HeaderButton/>
        <KotakMakanan/>
      </div>
    )
  }
}

export default App;


