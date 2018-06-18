import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho';

class App extends Component {
  render() {
    // HTML = JSX
    return (
      <Fragment>
        {/* Comentario vai aqui :) */}
        <Cabecalho usuario="dildias"/>
      </Fragment>
    );
  }
}

export default App;
