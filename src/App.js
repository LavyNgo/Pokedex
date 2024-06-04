import './App.css';
import { PokeList } from './components/PokeList';
import { PokemonDetail } from './components/PokemonDetail';
import React, { Component } from 'react';
import Pokemon from './components/Pokemon';

class App extends Component {

  constructor() {
    super()
    // default id = 1 when refresh the page
    this.state = {
      pokemon: {
        id: 1,
        name: 'bulbasaur',
        type: 'grass',
        height: 7,
        weight: 69,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      }
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        const pokemon = new Pokemon(data)
        this.setState({ pokemon })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App" >
        <PokeList handleOnClick={this.handleOnClick} />
        <PokemonDetail pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
