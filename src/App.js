import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import { Component } from 'react';
import { PokemonProvider } from './components/Pokemon-Context';
import PokemonDetail from './components/PokemonDetail';
import MyPokemonList from './components/MyPokemonList';

class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <PokemonProvider>
              <Navbar/>
              <Routes>
                <Route exact path="/" element={<PokemonList/>}>
                </Route>
                <Route path="/detail/:name" element={<PokemonDetail/>} />
                
                  <Route path="/my-pokemon-list" element={<MyPokemonList/>} />
              </Routes>
            </PokemonProvider>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default Main;
