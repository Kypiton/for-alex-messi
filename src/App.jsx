import Header from './components/header/Header';
import About from './components/about/About';
import Coffee from './components/coffee/Coffee';

import { cards } from './mock/data';
import { Component } from 'react';

class App extends Component {
  state = {
    cards,
  };

  render() {
    return (
      <>
        <Header />
        <About />
        <Coffee />
      </>
    );
  }
}

export default App;
