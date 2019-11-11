import React from 'react';
import './App.css';
import Logo from './assets/img/pokedex.png'
import {Container} from 'reactstrap'

// import Card from './components/card/Card';
import Pokedex from './components/pokedex/Pokedex';

function App() {
  return (
    <div className="pokedex-app">
      <Container>
        <div className="pokedex-app-header">
          <img src={Logo} alt=""/>
        </div>
        <Pokedex />
      </Container>
      <div className="pokedex-app-credits">
        <a href="http://instagram.com/jullietv" target="_blank">
          <img src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/536046/avatar.png?width=90" alt="Jullietv"/>
        </a>
      </div>
    </div>
  );
}

export default App;
